const database = require('../models/TitulosReceber')

class TitulosReceberController {
    static async pegaTodosTitulosReceber(req, res){
        try {        
                const todosTitulosReceber = await database.TitulosReceber.findAll()
                return res.status(200).json(todosTitulosReceber)
            
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static  async pegaUmTitulosReceber(req, res) {
        const{ id } = req.params
        try {
            const umTitulosReceber = await database.TitulosReceber.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(umTitulosReceber)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaTitulosReceber(req, res){
        let novoTitulosReceber = ""
        // Testes no Postamn ELSE.
        if(JSON.stringify(req.body) != JSON.stringify({})){
            novoTitulosReceber = {
                Data: req.body.Data,
                valor: req.body.valor,
                pagante: req.body.pagante,
                tipo_pagamento: req.body.tipo_pagamento,
                situacao: req.body.situacao,
                nota_fiscal: req.body.nota_fiscal
            }
        }else{
            novoTitulosReceber = {
                Data: req.query.Data,
                valor: req.query.valor,
                pagante: req.query.pagante,
                tipo_pagamento: req.query.tipo_pagamento,
                situacao: req.query.situacao,
                nota_fiscal: req.query.nota_fiscal
            }
        }
        try {
            const novoTitulosReceberCriado = await database.create(novoTitulosReceber)
            return res.status(200).json(novoTitulosReceberCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTitulosReceber(req, res){
        const { id } = req.params
        const novasInfo = req.body
        try {
            await database.TitulosReceber.update(novasInfo,  {where: { id:Number(id)}})
            const TitulosReceberAtualizado = await database.TitulosReceber.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(TitulosReceberAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        }

    static async apagaTitulosReceber(req, res){
        const { id } = req.params
        try {
            await database.TitulosReceber.destroy( {where: { id:Number(id)}} )
            return res.status(200).json({ mensgem:`id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }    
}


module.exports = TitulosReceberController
