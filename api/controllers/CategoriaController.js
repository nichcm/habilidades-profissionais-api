// controllers/TurmaController.js

class CategoriaController {

    static async pegaTodasAsCategorias(req, res) {
      try {
        const todasAsCategorias = await database.Categoria.findAll()
        return res.status(200).json(todasAsCategorias)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmaCategoria(req, res){
        const { id } =  req.params

        try{
            const umaCategoria = await database.Habilidades.findOne({ where: { id: Number(id) } })
            return res.status(200).json(umaCategoria)
        } catch (erro){
            return res.status(500).json(error.message)
        }
    }

    // faltas as outras requisições







}
    //etc