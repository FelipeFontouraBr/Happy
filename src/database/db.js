const Database = require('sqlite-async'); //chamando o sqlite do node_modules

Database.open(__dirname + '/database.sqlite').then(execute) //Pedindo para o sqlite abrir o diretório local e coloque na pasta um arquivo chamado database.qlite

function execute(db) {
    db.exec(`
        CREATE TABLE IF NOT EXIST orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}