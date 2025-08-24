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

export default conexao
