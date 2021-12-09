(async() =>{
    const Sequelize = require('sequelize')
    const connection = require('../db/db')

    const Book = await connection.define('books', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false
        },
        amount_pages: {
            type: Sequelize.INTEGER
        },

        //Data de lançamento
        release: {
            type: Sequelize.DATE
        },
        img: {
            type: Sequelize.STRING
        },
        slug: {
            type: Sequelize.STRING
        },
        categoriesID: {
            type: Sequelize.INTEGER
        }
    })

    module.exports.Book
})