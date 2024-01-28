const Sequelize = require('sequelize');
require('dotenv').config({path:'C:\\Users\\Joe\\OneDrive\\Documents\\PJTAK\\ALLPROJECTFORGIT\\PictureSaver\\.env'})


const pgdb = new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USED , process.env.DATABASE_PASSWORD, {
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