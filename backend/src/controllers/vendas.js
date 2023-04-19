const con = require("../dao/connect")

const criar = (req, res)=>{
    let string = `INSERT INTO vendas VALUE(DEFAULT,'${req.body.data}',${req.body.quantidade},${req.body.produtoId},${req.body.vendedorId})`
    con.query(string,(err, result)=>{
        if(err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res)=>{
    let string = "SELECT * FROM vendas"
    con.query(string, (err, result)=>{
        if(err == null)
            res.json(result).end()
            else{
                res.json(err).end()
            }
    })
}

const alterar = (req,res) => {
    const {data,quantidade,produtoId,vendedorId,id} = req.body
    let string = ` UPDATE vendas SET data = '${data}', quantidade = ${quantidade}, produtoId = ${produtoId}, vendedorId = ${vendedorId} WHERE id = ${id}` 
    con.query(string, (err, result) => {
        if (err == null) {
            if (result.affectedRows > 0) {
                res.json(result).end()
                return
            }
            res.send("não encontrado")
            return
        }
        res.json(err).end()
    })
}
    
const deletar = (req, res) => {
    const { id } = req.params
    let string = `DELETE FROM vendas WHERE id = ${id}`
    con.query(string, (err, result) => {
        if (err == null) {
            if (result.affectedRows > 0)
                res.status(204).end()
            else res.status(404).end()
        } else {
            res.json(err).status(400).end()
        }

    })
}

module.exports = {
    criar,
    listar,
    alterar,
    deletar
}