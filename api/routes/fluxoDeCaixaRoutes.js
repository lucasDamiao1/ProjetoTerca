const { Router } = require('express')
const FluxoDeCaixaController =require('../controllers/fluxoDeCaixaController')

const router = Router()

router.get('/fluxodecaixa', FluxoDeCaixaController.pegaTodosFluxoDeCaixa)
router.get('/fluxodecaixa/:id', FluxoDeCaixaController.pegaUmFluxoDeCaixa)
router.post('/fluxodecaixa', FluxoDeCaixaController.criaFluxoDeCaixa)
router.put('/fluxodecaixa/:id', FluxoDeCaixaController.atualizaFluxoDeCaixa)
router.delete('/fluxodecaixa/:id', FluxoDeCaixaController.apagaFluxoDeCaixa)

module.exports = router