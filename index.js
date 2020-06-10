const express = require('express')
const app = express()
const Noticias = require('./noticias/Noticias')

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('teste')
})

app.post('/listar', (req, res) =>{
    Noticias.findAll().then((lista) =>{
        res.send(lista)
    })
})

app.post('/adicionar', (req, res) =>{
    Noticias.create({
        titulo: 'teste2',
        corpo: 'corpo2'
    })
})


app.listen(8080, () =>{
    console.log('Servidor Rodando')
})