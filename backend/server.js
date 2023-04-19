const express = require('express')
const cors = require('cors')

const vendedorRouter = require('./src/routes/vendedor')
const produtosRouter = require('./src/routes/produtos')
const vendasRouter = require('./src/routes/vendas')

const app = express()
app.use(express.json())
app.use(cors())
app.use(vendedorRouter)
app.use(produtosRouter)
app.use(vendasRouter)

app.listen(3000,() => {
    console.log("Servidor rodando na porta 3000")
})