'use strict';

const Model = use('Model');

class Record extends Model {
  static get updatedAtColumn() {
    return 'updated_at';
  }
  user() {
    return this.belongsTo('App/Models/User');
  }
  profile() {
    return this.hasOne('App/Models/Profile', 'user_id', 'user_id');
  }
}

module.exports = Record;
