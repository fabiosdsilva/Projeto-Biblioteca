(async () => {
    const Sequelize = require('sequelize')
    const connection = await require('../db/db')
    const Users = await connection.define('users', {
        name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: true
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    })


    module.exports = Users
})