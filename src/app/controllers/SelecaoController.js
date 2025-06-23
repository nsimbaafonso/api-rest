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
    show(){}

    //Armazena dados
    store(){}

    //Atualiza dados
    update(){}

    //Elimina dados
    delete(){}
}

//padrão singleton
export default new SelecaoController()
