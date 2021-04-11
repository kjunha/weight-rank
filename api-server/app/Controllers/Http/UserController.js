'use strict';
const BaseController = use('App/Controllers/Http/BaseController');
const User = use('App/Models/User');
const Profile = use('App/Models/Profile');
const DB = use('Database');
const Redis = use('Redis');

class UserController extends BaseController {
  async getIdentityUrl({ ally, auth, response }) {
    const url = await ally.driver('github').getRedirectUrl();
    return response.send(url);
  }

  /**
   * 응답코드
   * 200: 정상적인 로그인 프로세스 진행
   * 201: code oauth 코드가 정상적으로 수신되었으나, 해당 유저 없음
   * 그 외: 정상적인 로그인이 이루어지지 않음 (코드 만료나 라우트 문제)
   * @param ally
   * @param auth
   * @param response
   * @returns {Promise<*>}
   */
  async getAccessToken({ ally, auth, request, response }) {
    const user = await ally.driver('github').getUser();
    const token = user.getAccessToken();
    const email = user.getEmail();
    const service = request.params.service;
    console.log(token, email, service);
    let userCheck = await User.query()
      .where('email', email)
      .where('oauth_service', service)
      .first();
    if (!userCheck) {
      const code = Math.random().toString(36).substring(5);
      const preRegistered = await Redis.hget('authcheck', code);
      if (preRegistered) {
        return response.conflict('key_already_exist');
      }
      await Redis.hset('authcheck', code, JSON.stringify({ token, email, service }));
      // returns 204 when user is not found
      return response.status(201).send(code);
    }
    if (userCheck.oauth_key !== token) {
      userCheck.oauth_key = token;
      await userCheck.save();
    }
    let apiToken = await auth.generate(userCheck);
    this.revokeRemainCurrentToken(userCheck.id);
    return response.json(apiToken);
  }

  async signup({ auth, request, response }) {
    const data = request.only(['code', 'name', 'profile']);
    const authInfo = await Redis.hget('authcheck', data.code);
    if (!authInfo) {
      return response.notFound('key_not_found');
    }
    const token = JSON.parse(authInfo);
    let newUser = await User.create({
      email: token.email,
      oauth_key: token.token,
      oauth_service: token.service
    });
    let newUserProfile = await Profile.create({
      user_id: newUser.id,
      user_name: data.name,
      user_profile: data.profile
    });
    await Redis.hdel('authcheck', data.code);
    console.log('signup process', { newUser });
    let apiToken = await auth.generate(newUser);
    return response.json(apiToken);
  }

  async undoSignup({ request, response }) {
    const data = request.only(['code']);
    await Redis.hdel('authcheck', data.code);
    return response.ok();
  }

  async revokeRemainCurrentToken(userId) {
    let latest = await DB.table('tokens').where('user_id', userId).orderBy('id','desc').first()
    await DB.table('tokens').where('user_id', userId).whereNot('id', latest.id).update('is_revoked', 1)
  }
}

module.exports = UserController;
