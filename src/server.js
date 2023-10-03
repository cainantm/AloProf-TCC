const profs = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars.githubusercontent.com/u/101364822?v=4",
        whatsapp: "119559595959", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Cainan Machado",
        avatar: "https://avatars.githubusercontent.com/u/101364822?v=4",
        whatsapp: "119559595959", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
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
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês",
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

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req,res){
    const filters = req.query
    return res.render("study.html", {profs, filters, subjects, weekdays})
}

function pageGiveClasses(req,res){
    const dados = req.query

    const isNotEmpty = Object.keys(dados).length > 0

    if (isNotEmpty) {

        dados.subject = getSubject(dados.subject)
        
        profs.push(dados)

        return res.redirect("/study")
    }
    
    return res.render("give-classes.html", {subjects, weekdays})
}



//const express = require('express')

//const nunjucks = require('nunjucks')

import express from 'express'
import nunjucks from 'nunjucks'
const server = express()

//configs nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//configuração de arquivos estáticos
.use(express.static("public"))

// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)