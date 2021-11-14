const database = require('../models')

class HabilidadeController {

  // relações de apenas habilidades
  static async pegaTodasAsHabilidades(req,res){
    try {
        const todasAsHabilidades = await database.Habilidades.findAll()
        return res.status(200).json(todasAsHabilidades)
    }catch(error){
        return res.status(500).json(error.message)
    }
}

static async pegaUmaHabilidade(req, res){
    const { id } =  req.params

    try{
        const umaHabilidade = await database.Habilidades.findOne({ where: { id: Number(id) } })
        return res.status(200).json(umaHabilidade)
    } catch (erro){
        return res.status(500).json(error.message)
    }
}

static async criaHabilidade(req, res){
    const novaHabilidade = req.body
    try{
        const novaHabilidadeCriada = await database.Habilidades.create(novaHabilidade)
        return res.status(200).json(novaHabilidadeCriada)

    }catch (error){
        return res.status(500).json(error.message)
    }
}


static async atualizaHabilidade(req, res){
    const { id } =  req.params
    const novasInfos = req.body

    try {
        await database.Habilidades.update(novasInfos, { where: { id: Number(id) } })
        const habilidadeAtualizada = await database.Habilidades.findOne({ where: { id: Number(id) } })
        return res.status(200).json(habilidadeAtualizada)

    } catch (error) {
        return res.status(500).json(error.message)
    }
    
}


static async apagaHabilidade (req, res) {
    const { id } =  req.params
    try {
        await database.Habilidades.destroy( { where: { id: Number(id) } } )
        return res.status(200).json({ mensagem: `id de habilidade ${id} deletado` })
    } catch (error) {
        return res.status(500).json(error.message)
    }

}


//relações macro com pessoas


//metodo GET
//http://localhost:3000/habilidades/habilidade:id/pessoas
//filtro pra pegar a habilidade e niveis de todas as pessoas, melhor para o gestar pegar

static async pegaTodasAsPessoasDaMesmaHabilidade(req,res){
    const { Habilidade_id } =  req.params

        try {
            const TodasAsHabilidadesDasPessoas = await database.Niveis.findAll({ where: {habilidade_id: Number(Habilidade_id)}})
            return res.status(200).json(TodasAsHabilidadesDasPessoas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = HabilidadeController