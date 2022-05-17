const { Router } = require('express')
const SaidasController =require('../controllers/SaidaController')

const router = Router()

router.get('/saida', SaidasController.pegaTodosSaida)
router.get('/saida/:id', SaidasController.pegaUmSaida)
router.post('/saida', SaidasController.criaSaida)
router.put('/saida/:id', SaidasController.atualizaSaida)
router.delete('/saida/:id', SaidasController.apagaSaida)

module.exports = router