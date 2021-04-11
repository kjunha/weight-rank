'use strict';

const Model = use('Model');
const Hash = use('Hash')

class User extends Model {
  static get updatedAtColumn() {
    return 'updated_at';
  }
  records() {
    return this.hasMany('App/Models/Record');
  }
  profile() {
    return this.hasOne('App/Models/Profile');
  }
  tokens() {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User;
