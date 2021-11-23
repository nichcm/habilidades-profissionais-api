const jwt = require('jsonwebtoken')


module.exports = function verificaJWT(req, res, next){
    const token = req.get('Authorization')
    console.log({token})
    if (token){
        const tokenExtract = token.replace(/Bearer /,'')
        jwt.verify(tokenExtract, 'senha-secreta', (error,decoded) =>{
            if(error){
                return res.status(401).send({msg:'erro na autenticação', error})
            }
            req.userId = decoded.id                        
            next()
        })
    }else{
        return res.status(401).send({msg:'por favor forneça o token'})
    }
}