const { Router } = require('express')
const UsersController =require('../controllers/userController')

const router = Router()

router.get('/user', UsersController.pegaTodosUsers)
router.get('/user/:id', UsersController.pegaUmUser)
router.post('/user', UsersController.criaUser)
router.put('/user/:id', UsersController.atualizaUser)
router.delete('/user/:id', UsersController.apagaUser)

module.exports = router