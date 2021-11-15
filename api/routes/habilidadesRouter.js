const { Router } = require('express')
const HabilidadeController = require('../controllers/HabilidadeController')

const router = Router()

router.get('/habilidades', HabilidadeController.pegaTodasAsHabilidades)
router.get('/habilidades/:id', HabilidadeController.pegaUmaHabilidade)
router.post('/habilidades', HabilidadeController.criaHabilidade)
router.put('/habilidades/:id', HabilidadeController.atualizaHabilidade)
router.delete('/habilidades/:id', HabilidadeController.apagaHabilidade)


router.get('/habilidades/:id/pessoas', HabilidadeController.pegaTodasAsPessoasDaMesmaHabilidade)

module.exports = router