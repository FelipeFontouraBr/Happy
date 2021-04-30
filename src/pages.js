// Responsável por conter as funções das rotas .get

// importação dos módulos
const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = { // Essa linha exporta o objeto para o arquivo server.js

    index(req, res) {
        return res.render('index')
    },
    orphanage(req,res) {
        return res.render('orphanage')
    },
    async orphanages(req, res) {
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render('orphanages', { orphanages })
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
        
    },
    createOrphanage(req,res) {
        return res.render('create-orphanage')
    }
}