import Database from "./db.js"
import createProf from "./createprof.js"

Database.then(async(db) => {
    //Inserir dados
    const profValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89987654534",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    const classValue = {
        subject: 1, 
        cost: "20", 
    }

    const classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastramos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProf(db, {profValue, classValue, classScheduleValues})

    //Consultar dados

    //todos os profs
    const selectedProfs = await db.all("SELECT * FROM profs")
    // console.log(selectedProfs)

    //consultar classes de um determinado prof
    // e trazer os dados do prof

    const selectClassesProfs = await db.all(`
        SELECT classes.*, profs.*
        FROM profs
        JOIN classes ON (profs.id = classes.prof_id)
        WHERE classes.prof_id = 1;
    `)

    

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    //console.log(selectClassesSchedules)
})