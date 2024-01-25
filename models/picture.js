const Sequelize = require('sequelize')

const pgdb = require('../database/sequelizedb')


const picture = pgdb.define('picture', {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false

        },
        Address : {
            type: Sequelize.STRING,
            allowNull : false

        },
        PictureName : {
            type: Sequelize.STRING,
            allowNull : false

        },
        albumId : {
            type: Sequelize.INTEGER,
            allowNull : false

        },
        userId : {
           // It would be used for only the adminId
            type: Sequelize.INTEGER,
            allowNull : false


        },

},{
            tableName:"picture"

});
/*picture.sync({alter: true
});*/

module.exports = picture;