import conexao from "../database/conexao"
class SelecaoRepository {
    //CRUD

    //Cria um novo dado
    create (selecao) {
        const sql = "INSERT INTO selecoes SET ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao, (error, result) => {
                if (error) return reject("Não foi possível armazenar")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
       })
    }

    //Busca todos dados da tabela
    findAll () {
        const sql = "SELECT * FROM selecoes"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if (error) return reject("Não foi possível localizar")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
       })
    }

    //Busca dados específicos
    findById (id) {
        const sql = "SELECT * FROM selecoes WHERE id = ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if (error) return reject("Não foi possível localizar")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
       })
    }

    //Atualiza dados
    update (selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id = ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, id], (error, result) => {
                if (error) return reject("Não foi possível atualizar")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
       })
    }

    //Elimina dados
    delete (id) {
        const sql = "DELETE FROM selecoes WHERE id = ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql,  id, (error, result) => {
                if (error) return reject("Não foi possível eliminar")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
       })
    }
}

export default SelecaoRepository();