import express from 'express'
import nunjucks from 'nunjucks'
import { pageLanding, pageStudy, pageGiveClasses, saveClasses } from './pages.js'
const server = express()

//configs nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.urlencoded({extended: true}))
//configuração de arquivos estáticos
.use(express.static("public"))

// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)