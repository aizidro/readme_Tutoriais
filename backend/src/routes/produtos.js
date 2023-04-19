const express = require("express");
const router = express.Router();

const produtos = require("../controllers/produtos")

router.get('/produtos/listar', produtos.listar);
router.post('/produtos/criar', produtos.criar);
router.put('/produtos/alterar', produtos.alterar);
router.delete('/produtos/deletar/:id', produtos.deletar);

module.exports = router;