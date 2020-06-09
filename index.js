const express = require('express')
const app = express()
const connection = require('./database/database')

app.get('/', (req, res) =>{
    res.send('Rota home')
})


app.listen(8080, () =>{
    console.log('Servidor Rodando')
})