'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecordTypesSchema extends Schema {
  async up() {
    const exist = await this.hasTable('record_types')
    if(!exist) {
      this.create('record_types', (table) => {
        table.increments()
        table.string('type_key', 4).notNullable().unique()
        table.json('type_value')
      })
    }
  }

  down () {
    this.drop('record_types')
  }
}

module.exports = RecordTypesSchema
