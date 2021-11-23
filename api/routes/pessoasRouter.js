const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/api/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/api/pessoas/:id', PessoaController.pegaUmaPessoa)
router.put('/api/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/api/pessoas/:id', PessoaController.apagaPessoa)

router.post('/register', PessoaController.criaPessoa)
router.post('/login', PessoaController.loginPessoa)

router.get('/api/pessoas/:pessoaId/habilidade/:habilidadeId',PessoaController.pegaUmaPessoaUmaHabilidade)
router.get('/api/pessoas/:pessoaId/habilidade',PessoaController.pegaTodasAsHabilidadesDaPessoa)
router.post('/api/pessoas/:pessoaId/habilidade',PessoaController.criaHabilidadeParaPessoa)
router.put('/api/pessoas/:pessoaId/habilidade/:habilidadeId',PessoaController.atualizaHabilidadeDaPessoa)
router.delete('/api/pessoas/:pessoaId/habilidade/:habilidadeId', PessoaController.apagaHabilidadeDaPessoa)

module.exports =  router