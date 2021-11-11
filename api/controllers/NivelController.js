const database = require('../models')


class NivelController {


    //pega todos os niveis
    //http://localhost:3000/niveis
    static async pegaTodasOsNiveis(req, res) {

      try {
        const todasOsNiveis= await database.Nivel.findAll()
        return res.status(200).json(todasOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }


    //POST cria nivel
    //http://localhost:3000/niveis/pessoa/:pessoaid/habilidade/:habilidadeid
    
    static async criaNivel(req, res){
      const { pessoaId, habilidadeId } =  req.params

      const novoNivel = req.body
      try{
          const novoNivelCriada = await database.Nivel.create(novoNivel)
          return res.status(200).json(novoNivelCriada)

      }catch (error){
          return res.status(500).json(error.message)
      }
    }

    //Deleta Nivel
    //http://localhost:3000/niveis






}