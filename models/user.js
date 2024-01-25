const Sequelize = require('sequelize')
const pgdb = require('../database/sequelizedb')
const picture = require("./picture");
const album = require("./album");


let users = pgdb.define('users', {

        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        firstName : {
            type : Sequelize.STRING,
            allowNull : false
        },
        lastName : {
            type : Sequelize.STRING,
            allowNull : false
        },
        dateOfBirth : {
        type : Sequelize.DATE,
            allowNull : false
        },
        username : {
        type : Sequelize.STRING,
            allowNull : false
        },
        email : {
            type : Sequelize.STRING,
            allowNull : false
        },
        password : {
            type : Sequelize.STRING,
            allowNull : false
        },
        isAdmin: {
            type : Sequelize.BOOLEAN,
            allowNull : false,
            defaultValue :true

        },


},{
    tableName: "users"

})

users.hasMany(picture, {foreignKey : "userId"});
picture.belongsTo(users, {foreignKey : "userId"});
users.hasMany(album, {foreignKey : "userId"});
album.belongsTo(album, {foreignKey : "userId"});

module.exports = users;