'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Profile extends Model {
  static get table() {
    return 'user_profiles';
  }
  static get updatedAtColumn() {
    return 'updated_at';
  }
  user() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = Profile;
