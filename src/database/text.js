const Database = require('./db')
const createProffy = require('./createProffy')


Database.then( async (db) => {
    proffyValue = {
     name: "Victor Serejo", 
     avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQFjWkFWVNN64w/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=r7qrgWQFwg_opMWwxW3laq65HuYwAuXRgbneEt8U1t0" ,
     whatsapp: "98675466", 
     bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
     
    }

    classValue = {
     subject: "Quimica", 
     cost: "20", 
     //proffy id virá pelo db
    }

    classScheduleValues = [
    {
        weekday : 1,
        time_from: 720,
        time_to: 1220
    },
    {
        weekday : 0,
        time_from: 520,
        time_to: 1220
    }
    ]
    await createProffy(db, {proffyValue, classValue, classScheduleValues})
})