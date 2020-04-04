'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.group(() => {
  Route.get('lieux', 'LieuController.index')
  Route.post('lieu', 'LieuController.create')
  Route.get('lieu/:id', 'LieuController.recup')
  Route.get('lieu/', 'LieuController.research').as('lieu.search')
  Route.get('search', 'LieuController.search')
 
}).prefix('api')