class NivelController {

    static async pegaTodasOsNiveis(req, res) {
      try {
        const todasOsNiveis= await database.Nivel.findAll()
        return res.status(200).json(todasOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}