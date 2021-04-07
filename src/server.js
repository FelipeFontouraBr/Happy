// importar dependencia
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

// iniciando o express
const server = express()

server
// utilizando os arquivos estáticos
.use(express.static('public'))

// configurar tamplate engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// criar uma rota
.get('/', pages.index)

// ligar o servidor
server.listen(5500)
console.log('Ta rodando a parada')