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

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' };
});

Route.group(() => {
  Route.get('identity/:service', 'UserController.getIdentityUrl');
  Route.post('token/:service', 'UserController.getAccessToken');
  Route.post('signup', 'UserController.signup');
  Route.post('test', async () => {
    const res = await Redis.hget('authcheck', 'nuxy0jt');
    return { res: JSON.parse(res) };
  });
}).prefix('api/v1/user');

Route.group(() => {
  Route.get('rank/:type', 'RecordController.getList');
  Route.get('personal/:user_id', 'RecordController.getMyRecords');
  Route.post('personal/:user_id', 'RecordController.updateRecord');
}).prefix('api/v1/record');
