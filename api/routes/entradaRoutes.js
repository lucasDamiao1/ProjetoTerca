const { Router } = require('express')
const EntradasController =require('../controllers/EntradaController')

const router = Router()

router.get('/entrada', EntradasController.pegaTodosEntrada)
router.get('/entrada/:id', EntradasController.pegaUmEntrada)
router.post('/entrada', EntradasController.criaEntrada)
router.put('/entrada/:id', EntradasController.atualizaEntrada)
router.delete('/entrada/:id', EntradasController.apagaEntrada)

module.exports = router