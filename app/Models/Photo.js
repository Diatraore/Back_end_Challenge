'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Photo extends Model {
    static get table () {
        return 'photos'
      }
      static get visible () {
        return [
            'nom',
            'media',
            'lieu_id'
    ]
      }
      lieu(){
          return this.belongsTo('App/Models/Lieu')
      }
}

module.exports = Photo
