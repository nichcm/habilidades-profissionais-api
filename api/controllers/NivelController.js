const database = require('../models')
const { QueryTypes } = require('sequelize');

class NivelController {


    //pega todos os niveis
    //http://localhost:3000/niveis
    static async pegaTodosOsNiveis(req, res) {
      
      try {
        const todasOsNiveis= await database.Niveis.findAll()
        return res.status(200).json(todasOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
    //get
    static async pegaHabilidadesDaPessoa( req, res){
      const { pessoaId } =  req.params
      try {
        const todasHabilidades = await database.sequelize
        .query(
          'SELECT h.titulo, n.nivel, n.experiencia, n.pessoas_id FROM niveis n INNER JOIN habilidades h ON n.habilidades_id = h.id WHERE n.pessoas_id = :pessoaId;',
          {
            replacements: { pessoaId },
            type: database.sequelize.QueryTypes.SELECT
          }
        )
        return res.status(200).json(todasHabilidades)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }


    //funções sem sentido:
  //   static async pegaUmNivel(req, res){
  //     const { pessoaId, habilidadeId } =  req.params

  //     try{
  //         const umaNivel = await database.Nivel.findOne({ where: { pessoas_id: Number(pessoaId), habilidade_id: Number(habilidadeid)} })
  //         return res.status(200).json(umaNivel)
  //     } catch (erro){
  //         return res.status(500).json(error.message)
  //     }
  // }


  //   //POST cria nivel
  //   //http://localhost:3000/niveis/pessoa/:pessoaid/habilidade/:habilidadeid
    
  //   static async criaNivel(req, res){
  //     const { pessoaId, habilidadeId } =  req.params

  //     const novoNivel = req.body
  //     try{
  //         const novoNivelCriada = await database.Nivel.create(novoNivel)
  //         return res.status(200).json(novoNivelCriada)

  //     }catch (error){
  //         return res.status(500).json(error.message)
  //     }
  //   }




  //   //Deleta Nivel
  //   //http://localhost:3000/niveis/pessoa/:pessoaid/habilidade/:habilidadeid

  //   static async apagaNivel (req, res) {
  //     const { pessoaId, habilidadeid } =  req.params
  //     try {
  //         await database.Nivel.destroy( { where: { pessoa_id: Number(pessoaId), habilidade_id: Number(habilidadeid)} })
  //         return res.status(200).json({ mensagem: `nivel de habilidade_id: ${habilidadeId} da pessoa:${pessoaId}  deletado` })
  //     } catch (error) {
  //         return res.status(500).json(error.message)
  //     }
  //   }



  //   static async atualizaNivel(req, res){
  //     const { pessoaId, habilidadeid } =  req.params
  //     const novasInfos = req.body

  //     try {
  //         await database.Nivel.update(novasInfos, { where: { pessoa_id: Number(pessoaId), habilidade_id: Number(habilidadeid)} })
  //         const nivelAtualizado = await database.Nivel.findOne({ where: { pessoa_id: Number(pessoaId), habilidade_id: Number(habilidadeid)} })
  //         return res.status(200).json(nivelAtualizado)

  //     } catch (error) {
  //         return res.status(500).json(error.message)
  //     } 
  // }
}

module.exports = NivelController