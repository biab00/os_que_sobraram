

const historias = async (req,res) => {
    const {historias} = await require("../public/js/script")
    res.render("pages/historias", {historias})
}

module.exports = {historias}