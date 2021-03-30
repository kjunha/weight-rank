'use strict';

const Model = use('Model');

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
}

module.exports = User;
