'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhotoSchema extends Schema {
  up () {
    this.create('photos', (table) => {
      table.increments()
      table.string('nom', 80).notNullable()
      table.string('media', 225).notNullable()
      table.integer('lieu_id').unsigned().references('id').inTable('lieus')
      table.timestamps()
    })
  }

  down () {
    this.drop('photos')
  }
}

module.exports = PhotoSchema
