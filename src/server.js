const proffys = [
    { name: "Diego Fernandes", avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" ,
     whatsapp: "98675466", 
     bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
     subject: "Quimica", 
     cost: "20", 
     weekday: [0], 
     time_from: [720], 
     time_to: [1220]
    },
    {
     name: "Victor Serejo", avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQFjWkFWVNN64w/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=r7qrgWQFwg_opMWwxW3laq65HuYwAuXRgbneEt8U1t0" ,
     whatsapp: "98675466", 
     bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
     subject: "Quimica", 
     cost: "20", 
     weekday: [1], 
     time_from: [720], 
     time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades
function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req,res){
    return res.render("index.html")
}

function pageStudy(req,res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req,res){
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }
    //adicionar a lista de proffys

    return res.render("give-classes.html", {subjects, weekdays})
}

//servidor
const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})
server.use(express.static("public"))
//configurar arquivos estaticos(css, scripts, imagens)

.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses)

.listen(5500)