const con = require('../dao/connect')

const criar = (req, res)=>{
    let string = `INSERT INTO item VALUE('${req.body.id}','${req.body.nome}','${req.body.descricao}',${req.body.valor})`
    con.query(string,(err, result)=>{
        if(err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res)=>{
    let string = "SELECT * FROM item"
    con.query(string, (err, result)=>{
        if(err == null)
            res.json(result).end()
    })
}

const excluir = (req, res)=>{
    let string = `DELETE FROM item WHERE id = '${req.params.id}'`
    con.query(string, (err, result)=>{
        if(result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    teste,
    criar,
    listar,
    excluir
}