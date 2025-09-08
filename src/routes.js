import { Router } from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";

const router = Router()

//Lista seleções
router.get("/selecoes", SelecaoController.index)
//Busca seleção por id
router.get("/selecoes/:id", SelecaoController.show)
//Cadastra seleção
router.post("/selecoes", SelecaoController.store)
//Atualiza seleção
router.put("/selecoes/:id", SelecaoController.update)
//Elimina seleção
router.delete("/selecoes/:id", SelecaoController.delete)

export default router