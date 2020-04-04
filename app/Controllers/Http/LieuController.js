
'use strict'

const Database = use('Database')
const Lieu = use('App/Models/Lieu')
const Photo = use('App/Models/Photo')
class LieuController {
   async index({response}){
        let lieu = await Lieu.query().with('medias').fetch()
       // console.log(lieu)
        return response.json(lieu)

    }
    async create({request, response}){
        const lieudata = request.only(['nom','description','telephone','longitude','latitude','img_nom','media'])
    
        let lieuQuery = await Lieu.query()
        .where('longitude', `${lieudata.longitude}`)
        .where('latitude', `${lieudata.latitude}`)
        .first()
        
      // return response.json(lieuQuery.id)
        if (lieuQuery) {
            const media = new Photo()
            media.nom = lieudata.img_nom
            media.media = lieudata.media
            media.lieu_id = lieuQuery.id
            await media.save()
            return response.status(201).json(media)
        
        } else {
            const lieu = new Lieu()
            lieu.nom = lieudata.nom
            lieu.description = lieudata.description
            lieu.telephone = lieudata.telephone
            lieu.longitude = lieudata.longitude
            lieu.latitude = lieudata.latitude
            await lieu.save()
            const media = new Photo()
            media.nom = lieudata.img_nom
            media.media = lieudata.media
            media.lieu_id = lieu.id
            await media.save()
            return response.status(201).json(lieu)

        }
        
    }

    async recup({params, response}){
        const lieu = await Lieu.findOrFail(params.id)
        return response.json(lieu)
    }
    
    async search({params,request, response}){
        let query = request.input('query')
        let longitude = request.input('longitude')
        let latitude = request.input('latitude')
         const lieu = await Lieu.query()
         .where('nom','like',`%${query}%`)
         .where('longitude','=',`${longitude}`)
         .where('latitude','=',`${latitude}`)
         .fetch()
        if (lieu.length > 0){
            return response.json(lieu)
        } else {
            const message = { message: 'Aucune donnée trouvée'}
            return response.json(message)
        } 
    }

}

module.exports = LieuController
