//Arquivo que faz a conexão com o bd mysql
import mysql from "mysql2"

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bdcopa"
})

conexao.connect()

/**
 * Executa um código SQL com ou sem valores
 * @param {string} sql instrução SQL a ser executada
 * @param {string=id | [selecao, id]} valores valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promisse
 */
export const consulta = (sql, valores="", mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result) => {
            if (error) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao
