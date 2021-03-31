'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CertificationsSchema extends Schema {
  up() {
    this.create('certifications', (table) => {
      table.increments();
      table.bigInteger('record_id').unsigned().notNullable().unique();
      table.bigInteger('certifier_id').unsigned().notNullable().unique().comment('기록 인증 요청자 uid');
      table.boolean('consent').default(false).comment('fillable 불가');
      table.timestamps();
    });
  }

  down() {
    this.drop('certifications');
  }
}

module.exports = CertificationsSchema;
