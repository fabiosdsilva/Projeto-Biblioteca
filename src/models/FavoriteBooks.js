(async () =>{
    const Sequelize = require('sequelize')
    const connection = require('../db/db')

    const FavoriteBooks = await connection.define('favorite_books', {
        usersId: {
            type: Sequelize.INTEGER,
        },
        booksId: {
            type: Sequelize.INTEGER,
        }
    })

    module.exports = FavoriteBooks
})