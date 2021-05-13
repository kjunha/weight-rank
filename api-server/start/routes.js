'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const Redis = use('Redis');

Route.get('api/v1', () => {
  return { greeting: 'Hello world in JSON' };
});

Route.group(() => {
  Route.get('identity/:service', 'UserController.getIdentityUrl');
  Route.post('token/:service', 'UserController.getAccessToken');
  Route.post('signup', 'UserController.signup');
  Route.put('signup', 'UserController.undoSignup')
  Route.get('session', async ({auth, response}) => {
    try {
      await auth.check()
    } catch (err) {
      return response.unauthorized()
    }
    return response.ok()
  })
}).prefix('api/v1/user').middleware('credential');

Route.group(() => {
  Route.get('rank', 'RecordController.getList');
}).prefix('api/v1/record');
