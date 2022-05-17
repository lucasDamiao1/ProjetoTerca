const database = require('../models/Movimentacao')

class MovimentacaoController {
    static async pegaTodosMovimentacao(req, res){
        try {        
                const todosMovimentacao = await database.Movimentacao.findAll()
                return res.status(200).json(todosMovimentacao)
            
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static  async pegaUmMovimentacao(req, res) {
        const{ id } = req.params
        try {
            const umMovimentacao = await database.Movimentacao.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(umMovimentacao)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaMovimentacao(req, res){
        let novoMovimentacao = ""
        // Testes no Postamn ELSE.
        if(JSON.stringify(req.body) != JSON.stringify({})){
            novoMovimentacao = {
                id_produto: req.body.id_produto,
                tipo: req.body.tipo,
                valor: req.body.valor
            }
        }else{
            novoMovimentacao = {
                id_produto: req.query.id_produto,
                tipo: req.query.tipo,
                valor: req.query.valor
            }
        }
        try {
            const novoMovimentacaoCriado = await database.create(novoMovimentacao)
            return res.status(200).json(novoMovimentacaoCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaMovimentacao(req, res){
        const { id } = req.params
        const novasInfo = req.body
        try {
            await database.Movimentacao.update(novasInfo,  {where: { id:Number(id)}})
            const MovimentacaoAtualizado = await database.Movimentacao.findOne(
                {where: { id:Number(id)}}
            )
            return res.status(200).json(MovimentacaoAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        }

    static async apagaMovimentacao(req, res){
        const { id } = req.params
        try {
            await database.Movimentacao.destroy( {where: { id:Number(id)}} )
            return res.status(200).json({ mensgem:`id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }    
}


module.exports = MovimentacaoController
