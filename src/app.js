//const express = require("express") // importando o express
import express from "express" // importando o express
import conexao from "../infra/conexao.js" // importando a conexão com o bd

const app = express() // criando instância do express
app.use(express.json()) // indicar para o express ler body da requisição com json

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
app.get("/selecoes", (req, res) => {
    const sql = "SELECT * FROM selecoes"
    conexao.query(sql, (error, result) => {
        if (error) {
            console.log("Ocorreu um erro: "+error)
            res.status(404).json({"erro": error})
        } else {
            res.status(200).json(result)
        }
    })
})

//Busca seleção por id
app.get("/selecoes/:id", (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM selecoes WHERE id = ?"
    conexao.query(sql, id, (error, result) => {
        const linha = result[0]
        if (error) {
            console.log("Ocorreu um erro: "+error)
            res.status(404).json({"erro": error})
        } else {
            res.status(200).json(linha)
        }
    })
})

//Cadastra seleção
app.post("/selecoes", (req, res) => {
    const selecao = req.body
    const sql = "INSERT INTO selecoes SET ?"
    conexao.query(sql, selecao, (error, result) => {
        if (error) {
            console.log("Ocorreu um erro: "+error)
            res.status(404).json({"erro": error})
        } else {
            res.status(201).json(result)
        }
    })
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
