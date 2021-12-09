(async() =>{
    const Sequelize = require('sequelize')
    const connection = require('../db/db')

    const Book = connection.define('books', {
        title: {
            type: Sequelize.STRING,
            allowNull: true
        },
        author: {
            type: Sequelize.STRING,
            allowNull: true
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