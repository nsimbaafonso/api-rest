//const express = require("express") // importando o express
import express from "express" // importando o express
const app = express() // criando instância do express

// mock
const selecoes = [
    {id:1, selecao:'Brasil', grupo:'G'},
    {id:2, selecao:'Suiça', grupo:'G'},
    {id:3, selecao:'Sérvia', grupo:'G'},
    {id:4, selecao:'Camarões', grupo:'G'}
]

//Rota padrão ou raiz| passamos dois paramêtros, req: de requisição e res: de resposta
app.get("/", (req, res) => {
    res.send("Curso de NodeJS feito em 2025")
}) 

app.get("/selecoes", (req, res) => {
    res.status().send(selecoes)
})

export default app
//para rodar o projeto, vamos no terminal e digitamos: node src/app.js
