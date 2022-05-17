const database = require('../models/Saida')

class SaidaController {
    static async pegaTodosSaida(req, res){
        try {        
                const todosSaida = await database.Saida.findAll()
                return res.status(200).json(todosSaida)
            
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static  async pegaUmSaida(req, res) {
        const{ id } = req.params
        try {
            const umSaida = await database.Saida.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(umSaida)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaSaida(req, res){
        let novoSaida = ""
        // Testes no Postamn ELSE.
        if(JSON.stringify(req.body) != JSON.stringify({})){
            novoSaida = {
                id_estoque: req.body.id_estoque,
                id_entrada: req.body.id_entrada,
                id_saida: req.body.id_saida,
                quantidade: req.body.quantidade
            }
        }else{
            novoSaida = {
                id_estoque: req.query.id_estoque,
                id_entrada: req.query.id_entrada,
                id_saida: req.query.id_saida,
                quantidade: req.query.quantidade
            }
        }
        try {
            const novoSaidaCriado = await database.create(novoSaida)
            return res.status(200).json(novoSaidaCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaSaida(req, res){
        const { id } = req.params
        const novasInfo = req.body
        try {
            await database.Saida.update(novasInfo,  {where: { id:Number(id)}})
            const SaidaAtualizado = await database.Saida.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(SaidaAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        }

    static async apagaSaida(req, res){
        const { id } = req.params
        try {
            await database.Saida.destroy( {where: { id:Number(id)}} )
            return res.status(200).json({ mensgem:`id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }    
}


module.exports = SaidaController
