

const historias =  (req,res) => {
    const {historias} = require("../public/js/script")
    res.render("pages/historias", {historias})
}

const formulario = (req, res) => {
    
}

const quiz1 = (req,res) => {
    const {questoes} = require("../public/js/questoes")
    const {quiz_personalidade} = require("../public/js/script")
    const cont = req.params.cont
    const value = req.params.value
    if (value != 4) {
        const result = questoes[cont-1].arquetipo[value]
        quiz_personalidade[result] += 1
    } else{
        quiz_personalidade.forEach(key => quiz_personalidade[key] = 0);
    }
    res.render("pages/quiz1", {questoes, cont});
}

module.exports = {historias, formulario, quiz1}