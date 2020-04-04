'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LieuSchema extends Schema {
  up () {
    this.create('lieus', (table) => {
      table.increments()
      table.string('nom', 80).notNullable()
      table.string('description', 225).notNullable()
      table.integer('telephone', 13).notNullable()
      table.integer('longitude', 13).notNullable()
      table.integer('latitude', 13).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('lieus')
  }
}

module.exports = LieuSchema
