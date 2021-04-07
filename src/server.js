// importar dependencia
const express = require('express')
const path = require('path')

// iniciando o express
const server = express()


server
// utilizando os arquivos estáticos
.use(express.static('public'))

// configurar tamplate engine
.set('views', path.join(__dirname, "views"))
.set('view egine', 'hbs')

// criar uma rota
.get('/', (request, response) => {
    return response.render('index')
})

// ligar o servidor
server.listen(5500)