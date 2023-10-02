export default async function (db, { profValue, classValue, classScheduleValue }) {
    //inserir dados na tabela de professores
    const insertedProf = await db.run(`
        INSERT INTO profs (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${profValue.name}",
            "${profValue.avatar}",
            "${profValue.whatsapp}",
            "${profValue.bio}"
        );
    `)

    const prof_id = insertedProf.lastID

    // inserir dados na tabela classes
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${prof_id}"
        );
    `)

    const class_id = insertedClass.lastID

    // Inserir dados na tabela class_schedule - como tem mais de uma, precisa ter ser um array
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    // aqui é executado todos os db.runs() das class_schudules
    await Promise.all(insertedAllClassScheduleValues)

}