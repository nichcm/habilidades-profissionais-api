//routes/CategoriaRoute.js

const { Router } = require('express')
const CategoriaController = require('../controllers/CategoriaController')

const router = Router()

router.get('/api/categorias', CategoriaController.pegaTodasAsCategorias)
router.get('/api/categorias/:id', CategoriaController.pegaUmaCategoria)
router.post('/api/categorias', CategoriaController.criaCategoria)
router.put('/api/categorias/:id', CategoriaController.atualizaCategoria)
router.delete('/api/categorias/:id', CategoriaController.apagaCategoria)
 
module.exports = router