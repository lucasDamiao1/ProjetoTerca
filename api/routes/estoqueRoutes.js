const { Router } = require('express')
const EstoquessController =require('../controllers/EstoquesController')

const router = Router()

router.get('/estoques', EstoquessController.pegaTodosEstoques)
router.get('/estoques/:id', EstoquessController.pegaUmEstoques)
router.post('/estoques', EstoquessController.criaEstoques)
router.put('/estoques/:id', EstoquessController.atualizaEstoques)
router.delete('/estoques/:id', EstoquessController.apagaEstoques)

module.exports = router