//Configurações do servidor
const app = require("./scr/app")

const PORT = 3000 //Porta do servidor local

app.listen(PORT, () => {
        console.log(`Servidor rodando em: http://localhost:${PORT}`)
    })