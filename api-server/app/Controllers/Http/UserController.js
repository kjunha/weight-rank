'use strict';
const BaseController = use('App/Controllers/Http/BaseController');
const User = use('App/Models/User');
const DB = use('Database');

class UserController extends BaseController{
  async getIdentityUrl({ ally, response }) {
    const url = await ally.driver('github').getRedirectUrl();
    return response.send(url);
  }

  async getAccessToken({ ally, auth, response }) {
    const user = await ally.driver('github').getUser()
    const token = user.getAccessToken()
    const email = user.getEmail()
    let userCheck = await User.query()
      .where('email', email)
      .fetch()



    return response.send(user.getAccessToken())
  }

  async signup(service, token, nickname) {

  }
}

module.exports = UserController;
