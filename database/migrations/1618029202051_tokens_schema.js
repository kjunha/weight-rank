'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TokensSchema extends Schema {
  async up() {
    const exist = await this.hasTable('tokens');
    if (!exist) {
      this.create('tokens', (table) => {
        table.increments();
        table.bigInteger('user_id').unsigned().notNullable();
        table.string('token', 255).notNullable().unique().index();
        table.string('type', 80).notNullable();
        table.boolean('is_revoked').defaultTo(false);
        table.timestamps();
      });
    }
  }

  down() {
    this.drop('tokens');
  }
}

module.exports = TokensSchema;
