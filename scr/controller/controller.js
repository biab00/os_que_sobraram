

const historias =  (req,res) => {
    const {historias} = require("../public/js/script")
    res.render("pages/historias", {historias})
}

const formulario = (req, res) => {
    
}

module.exports = {historias, formulario}