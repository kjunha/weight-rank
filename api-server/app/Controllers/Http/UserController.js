'use strict';
const BaseController = use('App/Controllers/Http/BaseController');
const User = use('App/Models/User');
const DB = use('Database');

class UserController extends BaseController{
  async getIdentityUrl({ ally, response }) {
    const url = await ally.driver('github').getRedirectUrl();
    return response.send(url);
  }

  /**
   * 응답코드
   * 200: 정상적인 로그인 프로세스 진행
   * 204: code oauth 코드가 정상적으로 수신되었으나, 해당 유저 없음
   * 그 외: 정상적인 로그인이 이루어지지 않음 (코드 만료나 라우트 문제)
   * @param ally
   * @param auth
   * @param response
   * @returns {Promise<*>}
   */
  async getAccessToken({ ally, auth, response }) {
    const user = await ally.driver('github').getUser()
    const token = user.getAccessToken()
    const email = user.getEmail()
    let userCheck = await User.query()
      .where('email', email)
      .first()
    if(!userCheck) {
      // returns 204 when user is not found
      return response.noContent('user_not_found')
    }
    return response.send(user.getAccessToken())
  }

  async signup(service, token, nickname) {

  }
}

module.exports = UserController;
