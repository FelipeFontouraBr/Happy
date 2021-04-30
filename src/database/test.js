const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {

    // inserir dados na tabela 
    await saveOrphanage(db, {
            id: 1,
            lat: "38.8795955",
            lng: "-6.9702756",
            name: "Lar dos meninos",
            about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
            whatsapp:"6550336458",
            images: [
                "https://images.unsplash.com/photo-1613244470042-e69e8ccb303a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE3ODE2Mzkx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
                
                "https://images.unsplash.com/photo-1614270270735-e93b1234fc7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE3ODE2NDIy&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
            ].toString(),
            instructions: "Veja como se sentir a vontade e traga muito amor e paciência para dar",
            opening_hours: "Horário de visitas das 18h até 8h",
            open_on_weekends: "1"    
    })

    // // consultar dados na tabela
    const selectdOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectdOrphanages)

    // // consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    // // deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})