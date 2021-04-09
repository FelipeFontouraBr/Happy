const Database = require('./db')

Database.then(async (db) => {
    // inserir dados na tabela 
    await db.run(`
        INSERT INTO orphanages (
            lat, 
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "38.8795955",
            "-6.9702756",
            "Lar dos meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
            "https://images.unsplash.com/photo-1613244470042-e69e8ccb303a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE3ODE2Mzkx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
            "Veja como se sentir a vontade e traga muito amor e paciência para dar",
            "Horário de visitas das 18h até 8h",
            "2"
        );
    `)

    // consultar dados na tabela
    const selectdOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectdOrphanages)
})