import UserService from '../services/UserService';

const userApi = new UserService();
export default async (to, from, next) => {
  await userApi.checkSession().then(() => {
    return next();
  }).catch(() => {
    return next({ name: 'init' });
  });
}
