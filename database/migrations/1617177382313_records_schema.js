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
        table.string('record_type').notNullable().comment('record_types type_key값 참조');
        table.float('rm_kg').defaultTo(0).comment('rm 키로그램으로 계산');
        table.float('rm_lb').defaultTo(0).comment('rm 파운드로 계산');
        table.integer('rep_count').unsigned().comment('1회 랩 횟수 카운트');
        table.string('video_link').comment('영상 등록 링크');
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
