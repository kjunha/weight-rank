'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserProfilesSchema extends Schema {
  async up() {
    const exist = await this.hasTable('user_profiles');
    if (!exist) {
      this.create('user_profiles', (table) => {
        table.increments();
        table.bigInteger('user_id').unsigned().notNullable().unique();
        table.string('user_name').notNullable().unique();
        table.string('user_profile');
        table.string('organization');
        table.timestamps();
      });
    }
  }

  down() {
    this.drop('user_profiles');
  }
}

module.exports = UserProfilesSchema;
