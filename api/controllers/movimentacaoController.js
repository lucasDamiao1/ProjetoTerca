const database = require('../models/Movimentacao')

class MovimentacaoController {
    static async pegaTodosMovimentacao(req, res){
        try {        
                const todosMovimentacao = await database.findAll()
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
                data: req.body.data,
                nota_fiscal: req.body.nota_fiscal,
                valor: req.body.valor,
                tipo_movimentacao: req.body.tipo_movimentacao,
                cod_transacao: req.body.cod_transacao,
            }
        }else{
            novoMovimentacao = {
                data: req.query.data,
                nota_fiscal: req.query.nota_fiscal,
                valor: req.query.valor,
                tipo_movimentacao: req.query.tipo_movimentacao,
                cod_transacao: req.query.cod_transacao,
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
            await database.update(novasInfo,  {where: { id:Number(id)}})
            const MovimentacaoAtualizado = await database.findOne(
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
            await database.destroy( {where: { id:Number(id)}} )
            return res.status(200).json({ mensgem:`id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }    
}


module.exports = MovimentacaoController
