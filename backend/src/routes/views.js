const express = require("express");
const router = express.Router();

const views = require("../controllers/views")

router.get('/views/proventos', views.proventos);
router.get('/views/vendas_especificada', views.vendas_especificada);
router.get('/views/total_vendas', views.total_vendas);

module.exports = router;

