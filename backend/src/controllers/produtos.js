const con = require("../dao/connect")

const criar = (req, res)=>{
    let string = `INSERT INTO produtos VALUE(DEFAULT,'${req.body.nome_cel}',${req.body.valor})`
    con.query(string,(err, result)=>{
        if(err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res)=>{
    let string = "SELECT * FROM produtos"
    con.query(string, (err, result)=>{
        if(err == null)
            res.json(result).end()
            else{
                res.json(err).end()
            }
    })
}

const alterar = (req,res) => {
    const {nome_cel,valor,id} = req.body
    let string = ` UPDATE produtos SET nome_cel = '${nome_cel}', valor = '${valor}' WHERE id = ${id}` 
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
    let string = `DELETE FROM produtos WHERE id = ${id}`
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