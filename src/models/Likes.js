(async () =>{
    const Sequelize = require('sequelize')
    const connection = require('../db/db')

    const Likes = await connection.define('likes', {
        usersId: {
            type: Sequelize.INTEGER,
        },
        booksId: {
            type: Sequelize.INTEGER,
        }

    })

    module.exports = Likes
})