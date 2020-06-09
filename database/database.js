const Sequelize = require('sequelize')
const connection = new Sequelize('portal_noticias', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql',
    timezzone:'-03:00'
})

module.exports = connection