import express from "express" 
import SelecaoController from "./app/controllers/SelecaoController.js"

const app = express()
app.use(express.json())

//Rotas 

//Lista seleções
app.get("/selecoes", SelecaoController.index)
//Busca seleção por id
app.get("/selecoes/:id", SelecaoController.show)
//Cadastra seleção
app.post("/selecoes", SelecaoController.store)
//Atualiza seleção
app.put("/selecoes/:id", SelecaoController.update)
//Elimina seleção
app.delete("/selecoes/:id", SelecaoController.delete)

export default app
//para rodar o projeto, vamos no terminal e digitamos: node src/app.js
