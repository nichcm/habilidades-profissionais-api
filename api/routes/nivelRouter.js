const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/api/niveis', NivelController.pegaTodosOsNiveis)
router.get('/api/niveis/pessoas/:pessoaId', NivelController.pegaHabilidadesDaPessoa)
// router.get('/niveis/:id', NivelController.pegaUmNivel)
// router.post('/niveis', NivelController.criaNivel)
// router.put('/niveis/:id', NivelController.atualizaNivel)
// router.delete('/niveis/:id', NivelController.apagaNivel)

module.exports = router