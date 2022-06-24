const { Router } = require('express')
constTitulosPagarController =require('../controllers/titulospagarController')

const router = Router()

router.get('/titulospagar',TitulosPagarController.pegaTodosTitulosPagar)
router.get('/titulospagar/:id',TitulosPagarController.pegaUmTitulosPagar)
router.post('/titulospagar',TitulosPagarController.criaTitulosPagar)
router.put('/titulospagar/:id',TitulosPagarController.atualizaTitulosPagar)
router.delete('/titulospagar/:id',TitulosPagarController.apagaTitulosPagar)

module.exports = router