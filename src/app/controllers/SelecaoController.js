import SelecaoRepository from "../repositories/SelecaoRepository.js"
class SelecaoController{

    //Lista tudo
    async index(req, res) {
        const row = await SelecaoRepository.findAll()
        res.json(row);
    }

    //Mostra dados por ID
    async show(req, res) {
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        res.json(row);
    }

    //Armazena dados
    async store(req, res) {
        const selecao = req.body
        const row = await SelecaoRepository.create(selecao)
        res.json(row);
    }

    //Atualiza dados
    async update(req, res) {
        const selecao = req.body
        const id = req.params.id
        const row = await SelecaoRepository.update(selecao, id)
        res.json(row);
    }

    //Elimina dados
   async delete(req, res) {
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        res.json(row)
    }
}

//padrão singleton
export default new SelecaoController()
