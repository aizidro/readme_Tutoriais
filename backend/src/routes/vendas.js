const express = require("express");
const router = express.Router();

const vendas = require("../controllers/vendas")

router.get('/vendas/listar', vendas.listar);
router.post('/vendas/criar', vendas.criar);
router.put('/vendas/alterar', vendas.alterar);
router.delete('/vendas/deletar/:id', vendas.deletar);

module.exports = router;