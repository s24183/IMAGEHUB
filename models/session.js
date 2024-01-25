const pgdb = require('../database/sequelizedb');
const Sequelize= require('sequelize');


const session = pgdb.define("session", {
        sid: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        userId: {
           type : Sequelize.STRING
        },
        expires: {
            type : Sequelize.DATE
        },
        data:{
            type : Sequelize.TEXT
        },

},{
    tableName : "session"
});
function extendDefaultFields(defaults, session) {
    return {
        data: defaults.data,
        expires: defaults.expires,
        userId: session.userId,
    };
}
module.exports = session;
module.exports.extendDefaultFields= extendDefaultFields;
