// Responsável por conter as funções das rotas .get

module.exports = { // Essa linha exporta o objeto para o arquivo server.js

    index(req, res) {
        return res.render('index')
    }
}