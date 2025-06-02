//const express = require("express") // importando o express
import express from "express" // importando o express
const app = express() // criando instância do express
app.use(express.json()) // indicar para o express ler body da requisição com json

// mock para simular dados do BD
const selecoes = [
    {id:1, selecao:'Brasil', grupo:'G'},
    {id:2, selecao:'Suiça', grupo:'G'},
    {id:3, selecao:'Camarões', grupo:'G'},
    {id:4, selecao:'Sérvia', grupo:'G'},
]

// função que busca seleção por id
function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

// função que busca a posição da seleção por id
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

//Rota padrão ou raiz| passamos dois paramêtros, req: de requisição e res: de resposta
app.get("/", (req, res) => {
    res.send("Curso de NodeJS feito em 2025")
}) 

//Busca seleção por id
app.get("/selecoes/:id", (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})

//Lista seleções
app.get("/selecoes", (req, res) => {
    res.status(200).send(selecoes)
})

//Cadastra seleção
app.post("/selecoes", (req, res) => {
    selecoes.push(req.body)
    res.status(201).send("Seleção cadastrada com sucesso")
})

//Elimina seleção
app.delete("/selecoes/:id", (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleção com o id ${req.params.id} excluída com sucesso`)
})

//Atualiza seleção
app.put("/selecoes/:id", (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})

export default app
//para rodar o projeto, vamos no terminal e digitamos: node src/app.js
