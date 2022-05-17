const database = require('../models/Estoque')

class EstoqueController {
    static async pegaTodosEstoque(req, res){
        try {        
                const todosEstoque = await database.Estoque.findAll()
                return res.status(200).json(todosEstoque)
            
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static  async pegaUmEstoque(req, res) {
        const{ id } = req.params
        try {
            const umEstoque = await database.Estoque.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(umEstoque)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaEstoque(req, res){
        let novoEstoque = ""
        // Testes no Postamn ELSE.
        if(JSON.stringify(req.body) != JSON.stringify({})){
            novoEstoque = {
                quantidade: req.body.quantidade,
                uso: req.body.uso
            }
        }else{
            novoEstoque = {
                quantidade: req.query.quantidade,
                uso: req.query.uso
            }
        }
        try {
            const novoEstoqueCriado = await database.create(novoEstoque)
            return res.status(200).json(novoEstoqueCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaEstoque(req, res){
        const { id } = req.params
        const novasInfo = req.body
        try {
            await database.Estoque.update(novasInfo,  {where: { id:Number(id)}})
            const EstoqueAtualizado = await database.Estoque.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(EstoqueAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        }

    static async apagaEstoque(req, res){
        const { id } = req.params
        try {
            await database.Estoque.destroy( {where: { id:Number(id)}} )
            return res.status(200).json({ mensgem:`id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }    
}


module.exports = EstoqueController
