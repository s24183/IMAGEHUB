const pgdb = require('../database/sequelizedb');
const Sequelize= require('sequelize');
const picture = require('./picture')

const album = pgdb.define('album', {
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull : false

    },
    albumName: {
        type: Sequelize.STRING,
        allowNull : false

    },
    Address: {
        type: Sequelize.STRING,
        allowNull : false

    },
    userId : {
        //Sa ap yon foreign key
        type : Sequelize.INTEGER,
        allowNull : false

    },
},{
        tableName: "album"

});



album.hasMany(picture, {foreignKey : "albumId"});
picture.belongsTo(album, {foreignKey : "albumId"});



module.exports = album;