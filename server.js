import app from "./src/app.js"
import conexao from "./infra/conexao.js"
const PORT = 3000 // definindo porta do projeto

//fazer a conexao
conexao.connect((error) => {
    if (error) {
        console.log("A conexão falhou:" + error)
    } else {//só depois da conexão é que chamamos o servidor
        console.log("Conexão feito com sucesso!")
        //escutando a porta 3000
        app.listen(PORT, () => {
            console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
        })
    }
})
