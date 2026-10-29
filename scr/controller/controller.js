

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
    if (cont == 6) {
        var maior = 0
        var posicao = 0
        for (let index in quiz_personalidade){
            if (quiz_personalidade[index] > maior) {maior = quiz_personalidade[index]; posicao = index};
        } 
        res.send(Object.keys(quiz_personalidade)[posicao])
        
    } else {
        res.render("pages/quiz", {questoes, cont});
    }
    if (value != 4) {
        const result = questoes[cont-1].arquetipos[value]
        quiz_personalidade[result] += 1
    } else{
        for (let value in quiz_personalidade){
            quiz_personalidade[value] = 0;
        } 
    }
    
}

module.exports = {historias, formulario, quiz1}