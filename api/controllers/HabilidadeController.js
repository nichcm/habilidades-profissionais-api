
class habilidadeController {

    static async pegaTodasAsHabilidades(req, res) {
      try {
        const todasAsHabilidades= await database.Habilidade.findAll()
        return res.status(200).json(todasAsHabilidades)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}