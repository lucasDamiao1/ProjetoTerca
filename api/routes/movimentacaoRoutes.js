const { Router } = require('express')
const MovimentacaoController =require('../controllers/movimentacaoController')

const router = Router()

router.get('/movimentacao', MovimentacaoController.pegaTodosMovimentacao)
router.get('/movimentacao/:id', MovimentacaoController.pegaUmMovimentacao)
router.post('/movimentacao', MovimentacaoController.criaMovimentacao)
router.put('/movimentacao/:id', MovimentacaoController.atualizaMovimentacao)
router.delete('/movimentacao/:id', MovimentacaoController.apagaMovimentacao)

module.exports = router