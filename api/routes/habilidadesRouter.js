const { Router } = require('express')
const CategoriaController = require('../controllers/CategoriaController')

const router = Router()
router
 .get('/habilidades', HabilidadeController.pegaTodosAsHabilidades)
 .get('/habilidades/:id', HabilidadeController.pegaUmaHabilidade)
 .post('/habilidades', HabilidadeController.criaHabilidade)
 .put('/habilidades/:id', HabilidadeController.atualizaHabilidade)
 .delete('/habilidades/:id', HabilidadeController.apagaHabilidade)


.get('/habilidades/habilidade:id/pessoas', HabilidadeController.pegaTodasAsPessoasDaMesmaHabilidade)

module.exports = router