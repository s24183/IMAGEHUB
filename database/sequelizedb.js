const Sequelize = require('sequelize');
const pgdb = new Sequelize('photography', 'postgres', 'Joepg', {
    host: 'localhost',
    dialect: 'postgres',
    define:{
        timestamps : false
    },
    logging: console.log,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});





module.exports = pgdb;