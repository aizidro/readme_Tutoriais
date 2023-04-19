const con = require("../dao/connect")

const criar = (req, res)=>{
    let string = `INSERT INTO vendedores VALUE(DEFAULT,'${req.body.nome}','${req.body.matricula}')`
    con.query(string,(err, result)=>{
        if(err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res)=>{
    let string = "SELECT * FROM vendedores"
    con.query(string, (err, result)=>{
        if(err == null)
            res.json(result).end()
            else{
                res.json(err).end()
            }
    })
}

const alterar = (req,res) => {
    const {nome,matricula,id} = req.body
    let string = ` UPDATE vendedores SET nome = '${nome}', matricula = '${matricula}' WHERE id = ${id} ` 
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
    let string = `DELETE FROM vendedores WHERE id = ${id}`
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