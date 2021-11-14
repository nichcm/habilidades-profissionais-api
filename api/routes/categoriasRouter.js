//routes/CategoriaRoute.js

const { Router } = require('express')
const CategoriaController = require('../controllers/CategoriaController')

const router = Router()

router.get('/categorias', CategoriaController.pegaTodasAsCategorias)
router.get('/categorias/:id', CategoriaController.pegaUmaCategoria)
router.post('/categorias', CategoriaController.criaCategoria)
router.put('/categorias/:id', CategoriaController.atualizaCategoria)
router.delete('/categorias/:id', CategoriaController.apagaCategoria)
 
module.exports = router