const database = require('../models')
const bcrypt = require('bcrypt');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const jwt = require('jsonwebtoken')
const BearerStrategy = require('passport-http-bearer').Strategy


class PessoaController{



    static criaTokenJWT(usuario){
        const payload = {
            id: usuario.id
        };
        const token = jwt.sign(payload, 'senha-secreta', {
            expiresIn:'6h'
        });
        return token;

    }
    static async loginPessoa(req, res){
        const login = req.body
        console.log(req.body)
        try{
            const pessoa = await database.Pessoas.findOne({ where: { email: login.email } })
                
                if (!pessoa){
                    return res.status(400).json({ mensagem: `usuario nao encontrado` }) 
                }

                const senhaHash = await bcrypt.compare(login.senha, pessoa.senha)
                if (senhaHash){
                        const token = PessoaController.criaTokenJWT(pessoa)
                        
                        return res.status(200).json({
                            token, 
                            pessoa: { 
                                id: pessoa.id,  
                                nome: pessoa.nome,
                                email: pessoa.email,
                                adm: pessoa.adm
                            }
                        })
                    }else{
                        return res.status(400).json({ mensagem: `Senha errada ou usuário invalidos` })
                    }

        }catch (error){
            return res.status(500).json(error.message)
        }
    }


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
            const senhaHash = await bcrypt.hash(req.body.senha,8)

            const novaPessoaCriada = await database.Pessoas.create({
                ...novaPessoa,
                senha: senhaHash
            })
            return res.status(200).json(novaPessoaCriada)

        }catch (error){
            return res.status(500).json(error.message)
        }
    }


    // modo login com post
    

  


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
    //http://localhost:3000/pessoas/:pessoaId/habilidade/:habilidadeid
    static async pegaUmaPessoaUmaHabilidade(req, res){
        const { pessoaId, habilidadeId } =  req.params
        try{
            const umaPessoaHabilidade = await database.Niveis.findOne({ where: { pessoas_id: pessoaId, habilidades_id: habilidadeId } })
            return res.status(200).json(umaPessoaHabilidade)
        } catch (erro){
            return res.status(500).json(error.message)
        }
    }


    //metodo GET
    //http://localhost:3000/pessoas/:pessoaId/habilidade
    static async pegaTodasAsHabilidadesDaPessoa(req,res){
        const { pessoaId } =  req.params

        try {
            const TodasAsHabilidadesDaPessoa = await database.Niveis.findAll({ where: {pessoas_id: pessoaId}})
            return res.status(200).json(TodasAsHabilidadesDaPessoa)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Metodo Post
    //http://localhost:3000/pessoas/:pessoaId/habilidade

    static async criaHabilidadeParaPessoa(req, res){
        const { pessoaId } =  req.params
        const novaHabilidade = req.body
        try{
            const novaHabilidadeCriada = await database.Niveis.create(
                {
                    pessoas_id: pessoaId,
                    habilidades_id: novaHabilidade.habilidades_id, 
                    experiencia: novaHabilidade.experiencia, 
                    nivel: novaHabilidade.nivel
                })
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
            await database.Niveis.update(novasInfos, { where: { pessoas_id: Number(pessoaId), habilidades_id: Number(habilidadeId) } })
            const HabilidadeDapessoaAtualizada = await database.Niveis.findOne({ where: { pessoas_id: Number(pessoaId), habilidades_id: Number(habilidadeId) } })
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
            await database.Niveis.destroy( { where: { pessoas_id: Number(pessoaId), habilidades_id: Number(habilidadeId) } } )
            return res.status(200).json({ mensagem: `habilidade_id: ${habilidadeId} da pessoa:${pessoaId}  deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController