const { Router } = require('express')
const HabilidadeController = require('../controllers/HabilidadeController')

const router = Router()

router.get('/api/habilidades', HabilidadeController.pegaTodasAsHabilidades)
router.get('/api/habilidades/:id', HabilidadeController.pegaUmaHabilidade)
router.post('/api/habilidades', HabilidadeController.criaHabilidade)
router.put('/api/habilidades/:id', HabilidadeController.atualizaHabilidade)
router.delete('/api/habilidades/:id', HabilidadeController.apagaHabilidade)


router.get('/api/habilidades/:id/pessoas', HabilidadeController.pegaTodasAsPessoasDaMesmaHabilidade)

module.exports = router