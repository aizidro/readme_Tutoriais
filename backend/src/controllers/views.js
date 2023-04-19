const con = require("../dao/connect")
const { route } = require("../routes/vendedor")

const proventos = (req, res) => {
    let string = "SELECT * FROM proventos"
    con.query(string,(err, result)=>{
        if(err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const vendas_especificada = (req, res) => {
    let string = "SELECT * FROM vendas_especificada"
    con.query(string,(err, result)=>{
        if(err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const total_vendas = (req, res) => {
    let string = "SELECT * FROM total_vendas"
    con.query(string,(err, result)=>{
        if(err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

module.exports = {
    proventos,
    vendas_especificada,
    total_vendas
}
