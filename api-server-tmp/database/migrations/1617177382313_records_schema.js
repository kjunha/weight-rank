'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class RecordsSchema extends Schema {
  async up() {
    const exist = await this.hasTable('records');
    if (!exist) {
      this.create('records', (table) => {
        table.increments();
        table.bigInteger('user_id').unsigned().notNullable();
        table.float('bp').defaultTo(0).comment;
        table.float('sq').defaultTo(0).comment;
        table.float('dl').defaultTo(0).comment;
        table.integer('cert_count').unsigned().comment('인증 횟수 카운트');
        table.timestamps();
      });
    }
  }

  down() {
    this.drop('records');
  }
}

module.exports = RecordsSchema;
