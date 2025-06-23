import express from "express" 
import conexao from "./app/database/conexao.js" 
import SelecaoController from "./app/controllers/SelecaoController.js"


const app = express()
app.use(express.json())

// função que busca seleção por id
function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

// função que busca a posição da seleção por id
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

//Rotas 

//Lista seleções
app.get("/selecoes", SelecaoController.index)

//Busca seleção por id
app.get("/selecoes/:id", SelecaoController.show)

//Cadastra seleção
app.post("/selecoes", SelecaoController.store)

//Elimina seleção
app.delete("/selecoes/:id", SelecaoController.delete)

//Atualiza seleção
app.put("/selecoes/:id", )

export default app
//para rodar o projeto, vamos no terminal e digitamos: node src/app.js
