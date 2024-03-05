const express = require("express")
const app = express()
const agendamentos = require('./banco')
 

app.get('/', function(req, res){
    console.log('Página principal')
    res.send('Primeira página')
})

app.get('/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado', (req, res) => {
    agendamentos.create({
        nome: req.params.nome,
        endereco: req.params.endereco,
        bairro: req.params.bairro,
        cep: req.params.cep,
        cidade: req.params.cidade,
        estado: req.params.estado
    })
})


app.listen(8081, function(){
    console.log('Servidor Ativo!')
})