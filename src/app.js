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
            res.status(400).json({"erro": error})
        } else {
            res.status(201).json(result)
        }
    })
})

//Elimina seleção
app.delete("/selecoes/:id", (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM selecoes WHERE id = ?"
    conexao.query(sql, id, (error, result) => {
        if (error) {
            console.log("Ocorreu um erro: "+error)
            res.status(404).json({"erro": error})
        } else {
            res.status(200).json(result)
        }
    })
})

//Atualiza seleção
app.put("/selecoes/:id", (req, res) => {
    const selecao = req.body
    const id = req.params.id
    const sql = "UPDATE selecoes SET ? WHERE id = ?"
    conexao.query(sql, [selecao, id], (error, result) => {
        if (error) {
            console.log("Ocorreu um erro: "+error)
            res.status(400).json({"erro": error})
        } else {
            res.status(200).json(result)
        }
    })
})

export default app
//para rodar o projeto, vamos no terminal e digitamos: node src/app.js
