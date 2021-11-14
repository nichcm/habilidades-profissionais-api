//const bodyParser = require ('body-parser')
const express= require('express')
const pessoas = require ('./pessoasRouter')
const categorias = require('./categoriasRouter')
const habilidades = require('./habilidadesRouter')
const niveis = require('./nivelRouter')

module.exports = app => {
    app.use(
        express.json(),
        pessoas,
        categorias,
        habilidades,
        niveis
    )
}