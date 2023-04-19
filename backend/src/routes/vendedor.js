const express = require("express");
const router = express.Router();

const vendedor = require("../controllers/vendedor")

router.get('/vendedor/listar', vendedor.listar);
router.post('/vendedor/criar', vendedor.criar);
router.put('/vendedor/alterar', vendedor.alterar);
router.delete('/vendedor/deletar/:id', vendedor.deletar);

module.exports = router;

