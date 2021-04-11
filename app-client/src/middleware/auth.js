import UserService from '../services/UserService';
import store from '../store';

const userApi = new UserService();
export default async (to, from, next) => {
  const identity = store.getters.identity;
  console.log('identity received', identity);
  await userApi.checkSession(identity).then(() => {
    return next();
  }).catch(() => {
    return next({ name: 'init' });
  });
}
