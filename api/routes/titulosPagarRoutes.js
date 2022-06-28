const { Router } = require('express')
const TituloPagarController =require('../controllers/titulosPagarController')

const router = Router()

router.get('/titulospagar',TituloPagarController.pegaTodosTituloPagar)
router.get('/titulospagar/:id',TituloPagarController.pegaUmTituloPagar)
router.post('/titulospagar',TituloPagarController.criaTituloPagar)
router.put('/titulospagar/:id',TituloPagarController.atualizaTituloPagar)
router.delete('/titulospagar/:id',TituloPagarController.apagaTituloPagar)

module.exports = router