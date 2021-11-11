const bodyParser = require ('body-parser')
const pessoas = require ('./pessoasRouter')

const categorias = require('./categoriasRoute')
const habilidades = require('./habilidadesRoute')
const niveis = require('./niveisRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        categorias,
        habilidades,
        niveis
    )
}