const database = require('../models')

class PessoaController{


    //relações de uma unica pessoa:

    static async pegaTodasAsPessoas(req,res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res){
        const { id } =  req.params

        try{
            const umaPessoa = await database.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(umaPessoa)
        } catch (erro){
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res){
        const novaPessoa = req.body
        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)

        }catch (error){
            return res.status(500).json(error.message)
        }
    }


    static async atualizaPessoa(req, res){
        const { id } =  req.params
        const novasInfos = req.body

        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) } })
            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(pessoaAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
        
    }


    static async apagaPessoa (req, res) {
        const { id } =  req.params
        try {
            await database.Pessoas.destroy( { where: { id: Number(id) } } )
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }


    //Relações Micro com Habilidades
    //http://localhost:3000/pessoas/:pessoaId/habilidade/habilidade:id
    static async pegaUmaPessoaUmaHabilidade(req, res){
        const { pessoaId, habilidadeId } =  req.params
        try{
            const umaPessoaHabilidade = await database.Niveis.findOne({ where: { pessoa_id: Number(pessoaId), habilidade_id: Number(habilidadeId) } })
            return res.status(200).json(umaPessoaHabilidade)
        } catch (erro){
            return res.status(500).json(error.message)
        }
    }


    //metodo GET
    //http://localhost:3000/pessoas/:pessoaId/habilidade

    static async pegaTodasAsHabilidadesDaPessoa(req,res){
        const { pessoa_id } =  req.params

        try {
            const TodasAsHabilidadesDaPessoa = await database.Niveis.findAll({ where: {pessoa_id: Number(pessoaId)}})
            return res.status(200).json(TodasAsHabilidadesDaPessoa)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Metodo Post
    //http://localhost:3000/pessoas/:pessoaId/habilidade

    static async criaHabilidadeParaPessoa(req, res){
        const novaHabilidade = req.body
        try{
            const novaHabilidadeCriada = await database.Niveis.create(novaHabilidade)
            return res.status(200).json(novaHabilidadeCriada)

        }catch (error){
            return res.status(500).json(error.message)
        }
    }


    //atualiza habilidade da pessoa PUT
    //http://localhost:3000/pessoas/:pessoaId/habilidade/habilidade:id

    static async atualizaHabilidadeDaPessoa(req, res){
        const { pessoaId, habilidadeId } =  req.params
        const novasInfos = req.body

        try {
            await database.Niveis.update(novasInfos, { where: { pessoa_id: Number(pessoaId), habilidade_id: Number(habilidadeId) } })
            const HabilidadeDapessoaAtualizada = await database.Niveis.findOne({ where: { pessoa_id: Number(pessoaId), habilidade_id: Number(habilidadeId) } })
            return res.status(200).json(HabilidadeDapessoaAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
        
    }


    //Deleta uma habilidade da pessoa
    //http://localhost:3000/pessoas/:pessoaId/habilidade/habilidade:id
    static async apagaHabilidadeDaPessoa (req, res) {
        const { pessoaId, habilidadeId } =  req.params
        try {
            await database.Niveis.destroy( { where: { pessoa_id: Number(pessoaId), habilidade_id: Number(habilidadeId) } } )
            return res.status(200).json({ mensagem: `habilidade_id: ${habilidadeId} da pessoa:${pessoaId}  deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    











}

module.exports = PessoaController