const database = require('../models/TituloPagar')

class TituloPagarController {
    static async pegaTodosTituloPagar(req, res){
        try {        
                const todosTituloPagar = await database.TituloPagar.findAll()
                return res.status(200).json(todosTituloPagar)
            
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static  async pegaUmTituloPagar(req, res) {
        const{ id } = req.params
        try {
            const umTituloPagar = await database.TituloPagar.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(umTituloPagar)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaTituloPagar(req, res){
        let novoTituloPagar = ""
        // Testes no Postamn ELSE.
        if(JSON.stringify(req.body) != JSON.stringify({})){
            novoTituloPagar = {
                codigo: req.body.codigo,
                data_vencimento: req.body.data_vencimento,
                data_aberto: req.body.data_aberto,
                data_liquidacao: req.body.data_liquidacao,
                valor: req.body.valor,
                sacado: req.body.sacado,
                beneficios: req.body.beneficios,
                situacao: req.body.situacao,
            }
        }else{
            novoTituloPagar = {
                codigo: req.query.codigo,
                data_vencimento: req.query.data_vencimento,
                data_aberto: req.query.data_aberto,
                data_liquidacao: req.query.data_liquidacao,
                valor: req.query.valor,
                sacado: req.query.sacado,
                beneficios: req.query.beneficios,
                situacao: req.query.situacao,
            }
        }
        try {
            const novoTituloPagarCriado = await database.create(novoTituloPagar)
            return res.status(200).json(novoTituloPagarCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTituloPagar(req, res){
        const { id } = req.params
        const novasInfo = req.body
        try {
            await database.TituloPagar.update(novasInfo,  {where: { id:Number(id)}})
            const TituloPagarAtualizado = await database.TituloPagar.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(TituloPagarAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        }

    static async apagaTituloPagar(req, res){
        const { id } = req.params
        try {
            await database.TituloPagar.destroy( {where: { id:Number(id)}} )
            return res.status(200).json({ mensgem:`id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }    
}


module.exports = TituloPagarController
