import conexao from "../database/conexao.js"
class SelecaoController{

    //Lista tudo
    index(req, res) {
        const sql = "SELECT * FROM selecoes"
        conexao.query(sql, (error, result) => {
            if (error) {
                console.log("Ocorreu um erro: "+error)
                res.status(404).json({"erro": error})
            } else {
                res.status(200).json(result)
            }
        })
    }

    //Mostra dados por ID
    show(req, res) {
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
    }

    //Armazena dados
    store(req, res) {
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
    }

    //Atualiza dados
    update(req, res) {
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
    }

    //Elimina dados
    delete(req, res) {
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
    }
}

//padrão singleton
export default new SelecaoController()
