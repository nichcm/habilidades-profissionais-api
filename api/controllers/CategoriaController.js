const database = require('../models')

class CategoriaController {

    static async pegaTodasAsCategorias(req, res) {
      try {
        const todasAsCategorias = await database.Categorias.findAll()
        return res.status(200).json(todasAsCategorias)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmaCategoria(req, res){
        const { id } =  req.params

        try{
            const umaCategoria = await database.Categorias.findOne({ where: { id: Number(id) } })
            return res.status(200).json(umaCategoria)
        } catch (erro){
            return res.status(500).json(error.message)
        }
    }

    static async criaCategoria(req, res){
        const novaCategoria = req.body
        try{
            const novaCategoriaCriada = await database.Categorias.create(novaCategoria)
            return res.status(200).json(novaCategoriaCriada)

        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaCategoria(req, res){
        const { id } =  req.params
        const novasInfos = req.body

        try {
            await database.Categorias.update(novasInfos, { where: { id: Number(id) } })
            const categoriaAtualizada = await database.Categorias.findOne({ where: { id: Number(id) } })
            return res.status(200).json(categoriaAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
        
    }


    static async apagaCategoria (req, res) {
        const { id } =  req.params
        try {
            await database.Categorias.destroy( { where: { id: Number(id) } } )
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

}

module.exports = CategoriaController