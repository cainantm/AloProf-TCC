import express from 'express'
import nunjucks from 'nunjucks'
import { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageLogin, pageRegister } from './pages.js'
import bcrypt from 'bcrypt'
const server = express()

//configs nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server.set('view-engine', 'ejs')

server
.use(express.urlencoded({extended: false}))

.use(express.static("public"))

// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/login", pageLogin)
.post("/login", )
.get("/register", pageRegister)
.post("/register", )
.post("/save-classes", saveClasses)
.listen(5500)