const express = require("express")
const rota = express.Router()

const controller = require("../controller/controller")


rota.get("/", (req, res) => {
    res.render("pages/index")
})

rota.get("/quiz_personalidade", (req, res) => {
    res.render("pages/quiz1")
})

rota.get("/historias", controller.historias)

rota.get("/sugestoes", (req, res) => {
    res.render("pages/index")
})

rota.get("/quiz_conhecimentos", (req, res) => {
    res.render("pages/quiz_geral")
})

module.exports = rota
