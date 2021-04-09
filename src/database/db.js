const Database = require('sqlite-async'); //chamando o sqlite do node_modules

Database.open(__dirname + '/database.sqlite').then(execute) //Pedindo para o sqlite abrir o diretório local e coloque na pasta um arquivo chamado database.qlite

function execute(db) {
    
}