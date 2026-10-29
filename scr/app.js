//Atribuições do node_modules em variáveis
const express = require('express')
const method_override = require('method-override') //Permite o uso de PUT e DELETE
const favicon = require("serve-favicon")
const path = require('path')
const app = express()

//Declaração das utilizações do app.js (execução dos node_modules)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(method_override('_method'))

//favicon
app.use(favicon(path.join(__dirname, "public", "img", "favicon.ico")))
app.use(express.static(path.join(__dirname, "public")))


//permite o sistema procurar e executar arquivos .ejs
app.set("view engine", "ejs")
//norteia o sistema através das pastas, permitindo a renderização dos arquivos
app.set("views", path.join(__dirname, "views"))

//rotas
const rota = require("../scr/routes/router")
app.use("/", rota)

//Exporta as aplicações para os outros arquivos
module.exports = app