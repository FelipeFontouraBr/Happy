// Responsável por conter as funções das rotas .get

// importação dos módulos
const orphanages = require('./database/fakedata.js');

module.exports = { // Essa linha exporta o objeto para o arquivo server.js

    index(req, res) {
        return res.render('index')
    },
    orphanage(req,res) {
        return res.render('orphanage')
    },
    orphanages(req, res) {
        return res.render('orphanages', { orphanages })
    },
    createOrphanage(req,res) {
        return res.render('create-orphanage')
    }
}