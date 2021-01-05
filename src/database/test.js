const Database = require ('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
     await saveOrphanage(db, {
             lat: "-23.6772801",
             lng: "-46.6823497",
             name: "Lugar de Amor",
             about: "Aqui nossas crianças encontram afeto e acolhimento, além de oficinas de esportes, cultura, lazer e cidadania",
             whatsapp: "11988883333",
               images: [
                "https://images.unsplash.com/photo-1603138461420-e24168721842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
                
                 "https://images.unsplash.com/photo-1607501197654-dcd586bbf39e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
             ].toString(),
             instructions: "Venha visitar nossas crianças e traga muito amor e carinho para elas!",
             opening_hours: "Horários de visitas Das 08h até 18h.",
             open_on_weekends: "0"
  
     })

    //consultar dados na tabela
       const selectedOrphanages = await db.all("SELECT *  FROM orphanages")
       console.log(selectedOrphanages)

    //consultando apenas 1 orphanato.  
        const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="1"')
        console.log(orphanage)

    //remover dado da tabela
        console.log (await db.run("DELETE FROM orphanages WHERE ID = '4'"))
        console.log (await db.run("DELETE FROM orphanages WHERE id = '6'"))

})