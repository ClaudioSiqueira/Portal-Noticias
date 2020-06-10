const Sequelize = require('sequelize')
const connection = require('../database/database')

const Noticia = connection.define('Noticias',{
    id_noticia:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false
    },
    titulo:{
        type: Sequelize.STRING,
        allowNull:false
    },
    corpo:{
        type:Sequelize.TEXT,
        allowNull:false
    }        
})

Noticia.sync({force:false})
module.exports = Noticia