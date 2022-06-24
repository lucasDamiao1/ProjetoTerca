const database = require('../models/FluxoDeCaixa')

class FluxoDeCaixaController {
    static async pegaTodosFluxoDeCaixa(req, res){
        try {        
                const todosFluxoDeCaixa = await database.FluxoDeCaixa.findAll()
                return res.status(200).json(todosFluxoDeCaixa)
            
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static  async pegaUmFluxoDeCaixa(req, res) {
        const{ id } = req.params
        try {
            const umFluxoDeCaixa = await database.FluxoDeCaixa.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(umFluxoDeCaixa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaFluxoDeCaixa(req, res){
        let novoFluxoDeCaixa = ""
        // Testes no Postamn ELSE.
        if(JSON.stringify(req.body) != JSON.stringify({})){
            novoFluxoDeCaixa = {
                data: req.body.data,
                decricao: req.body.decricao,
                credito: req.body.credito,
                debito: req.body.debito
            }
        }else{
            novoFluxoDeCaixa = {
                data: req.query.data,
                decricao: req.query.decricao,
                credito: req.query.credito,
                debito: req.query.debito
            }
        }
        try {
            const novoFluxoDeCaixaCriado = await database.create(novoFluxoDeCaixa)
            return res.status(200).json(novoFluxoDeCaixaCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaFluxoDeCaixa(req, res){
        const { id } = req.params
        const novasInfo = req.body
        try {
            await database.FluxoDeCaixa.update(novasInfo,  {where: { id:Number(id)}})
            const FluxoDeCaixaAtualizado = await database.FluxoDeCaixa.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(FluxoDeCaixaAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        }

    static async apagaFluxoDeCaixa(req, res){
        const { id } = req.params
        try {
            await database.FluxoDeCaixa.destroy( {where: { id:Number(id)}} )
            return res.status(200).json({ mensgem:`id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }    
}


module.exports = FluxoDeCaixaController
