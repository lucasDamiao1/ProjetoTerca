const database = require('../models/User')

class UserController {
    static async pegaTodosUsers(req, res){
        try {        
                const todosUsers = await database.User.findAll()
                return res.status(200).json(todosUsers)
            
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static  async pegaUmUser(req, res) {
        const{ id } = req.params
        try {
            const umUser = await database.User.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(umUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaUser(req, res){
        let novoUser = ""
        // Testes no Postamn ELSE.
        if(JSON.stringify(req.body) != JSON.stringify({})){
            novoUser = {
                name: req.body.name,
                email: req.body.email,
                senha: req.body.senha,
                CPF: req.body.CPF,
                datanasci: req.body.datanasci
            }
        }else{
            novoUser = {
                name: req.query.name,
                email: req.query.email,
                senha: req.query.senha,
                CPF: req.query.CPF,
                datanasci: req.query.datanasci
            }
        }
        try {
            const novoUserCriado = await database.create(novoUser)
            return res.status(200).json(novoUserCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaUser(req, res){
        const { id } = req.params
        const novasInfo = req.body
        try {
            await database.User.update(novasInfo,  {where: { id:Number(id)}})
            const UserAtualizado = await database.User.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(UserAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        }

    static async apagaUser(req, res){
        const { id } = req.params
        try {
            await database.User.destroy( {where: { id:Number(id)}} )
            return res.status(200).json({ mensgem:`id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }    
}


module.exports = UserController
