//routes/CategoriaRoute.js

const { Router } = require('express')
const CategoriaController = require('../controllers/CategoriaController')

const router = Router()
router
 .get('/categorias', CategoriaController.pegaTodosAsCategorias)
 .get('/categorias/:id', CategoriaController.pegaUmaCategoria)
 .post('/categorias', CategoriaController.criaCategoria)
 .put('/categorias/:id', CategoriaController.atualizaCategoria)
 .delete('/categorias/:id', CategoriaController.apagaCategoria)
module.exports = router