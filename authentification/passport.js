const passport = require('passport');
const pgdb = require('../database/sequelizedb');
const users = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

async function validPass(pass, storePass) {
   try{
       return await bcrypt.compare(pass, storePass);

   }catch (err){
       console.log(err);
        return false;
   }

}

passport.use(new LocalStrategy(
    {
        usernameField: "username",
        passwordField: "password"
    },
     function(username, password, done) {

            users.findOne({
                where : {
                username: username
                }
            }).then( async  user=> {
                if (!user) {
                    return done(null, false, {message: "User does not exist"});
                } else {
                    valid = await validPass(password, user.password);
                    if (!valid) {
                        return done(null, false, {message: "Password is not valid."});
                    }
                    return done(null, user);
                }

            }).catch(err => console.log(err))

    }
));


passport.serializeUser(function(user, done) {
    process.nextTick(function() {
        return done(null, user.id);
    });
});
passport.deserializeUser(function(id, done) {
    users.findByPk(id)
        .then(user => {
            done(null, user)
        })
        .catch(err => console.log(err));
})

