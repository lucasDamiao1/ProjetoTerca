const { Router } = require('express')
const TitulosReceberController =require('../controllers/titulosReceberController')

const router = Router()

router.get('/titulosreceber', TitulosReceberController.pegaTodosTitulosReceber)
router.get('/titulosreceber/:id', TitulosReceberController.pegaUmTitulosReceber)
router.post('/titulosreceber', TitulosReceberController.criaTitulosReceber)
router.put('/titulosreceber/:id', TitulosReceberController.atualizaTitulosReceber)
router.delete('/titulosreceber/:id', TitulosReceberController.apagaTitulosReceber)

module.exports = router