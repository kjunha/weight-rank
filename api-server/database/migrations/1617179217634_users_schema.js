'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email').notNullable()
      table.string('oauth_key').notNullable()
      table.string('oauth_service').notNullable()
      table.enu('user_status', ['ACTIVE', 'INACTIVE', 'DEREGISTER', 'SUSPENDED']).defaultTo('ACTIVE')
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
