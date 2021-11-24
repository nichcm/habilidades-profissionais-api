//const bodyParser = require ('body-parser')
const express= require('express')
const pessoas = require ('./pessoasRouter')
const categorias = require('./categoriasRouter')
const habilidades = require('./habilidadesRouter')
const niveis = require('./nivelRouter')
const verificaJWT = require ('../config/auth-jwt')
const cors = require('cors')

module.exports = app => {
    app.use(cors())
    app.use(
        '/api*',
        verificaJWT
    )
    app.use(
        express.json(),
        pessoas,
        categorias,
        habilidades,
        niveis
    )
}