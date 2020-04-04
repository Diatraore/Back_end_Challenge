'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Lieu extends Model {
    static get table () {
        return 'lieus'
      }

      static get visible () {
        return [
            'nom',
            'description',
            'telephone',
            'longitude',
            'latitude',
            'id'
    ]
      }

     medias(){
        return this.hasMany('App/Models/Photo')
      }
}

module.exports = Lieu
