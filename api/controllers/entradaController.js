const database = require('../models/Entrada')

class EntradaController {
    static async pegaTodosEntrada(req, res){
        try {        
                const todosEntrada = await database.Entrada.findAll()
                return res.status(200).json(todosEntrada)
            
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static  async pegaUmEntrada(req, res) {
        const{ id } = req.params
        try {
            const umEntrada = await database.Entrada.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(umEntrada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaEntrada(req, res){
        let novoEntrada = ""
        // Testes no Postamn ELSE.
        if(JSON.stringify(req.body) != JSON.stringify({})){
            novoEntrada = {
                id_estoque: req.body.id_estoque,
                id_entrada: req.body.id_entrada,
                id_Entrada: req.body.id_Entrada,
                quantidade: req.body.quantidade,
                forma_pagamento: req.body.forma_pagamento
            }
        }else{
            novoEntrada = {
                id_estoque: req.query.id_estoque,
                id_entrada: req.query.id_entrada,
                id_Entrada: req.query.id_Entrada,
                quantidade: req.query.quantidade,
                forma_pagamento: req.query.forma_pagamento
            }
        }
        try {
            const novoEntradaCriado = await database.create(novoEntrada)
            return res.status(200).json(novoEntradaCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaEntrada(req, res){
        const { id } = req.params
        const novasInfo = req.body
        try {
            await database.Entrada.update(novasInfo,  {where: { id:Number(id)}})
            const EntradaAtualizado = await database.Entrada.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(EntradaAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        }

    static async apagaEntrada(req, res){
        const { id } = req.params
        try {
            await database.Entrada.destroy( {where: { id:Number(id)}} )
            return res.status(200).json({ mensgem:`id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }    
}


module.exports = EntradaController
