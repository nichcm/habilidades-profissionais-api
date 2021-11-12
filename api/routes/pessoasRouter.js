const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)

router.get('/pessoas/:pessoaId/habilidade/habilidade:id',PessoaController.pegaUmaPessoaUmaHabilidade)
router.get('pessoas/:pessoaId/habilidade',PessoaController.pegaTodasAsHabilidadesDaPessoa)
router.post('/pessoas/:pessoaId/habilidade',PessoaController.criaHabilidadeParaPessoa)
router.put('/pessoas/:pessoaId/habilidade/habilidade:id',PessoaController.atualizaHabilidadeDaPessoa)
router.delete('/pessoas/:pessoaId/habilidade/habilidade:id', PessoaController.apagaHabilidadeDaPessoa)

module.exports =  router