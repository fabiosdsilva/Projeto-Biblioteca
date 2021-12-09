(async () =>{
    const Sequelize = require('sequelize')
    const connection = require('../db/db')

    const Categories = await connection.define('categories', {
        name: {
            type: Sequelize.STRING
        }
    })

    module.exports = Categories
})