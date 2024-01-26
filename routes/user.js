var express = require('express');
var router = express.Router();
const users = require('../models/user')
const passport = require('passport')
const validPass = require('../authentification/passport').validPass;
const bcrypt = require('bcrypt');
const authorize = require("../authentification/authenticator").authorize;
const admin = require("../authentification/authenticator").admin;


/* GET users listing. */



router.get('/register', function(req, res, next) {
  res.render('register', {title : "New User"})
});
router.post('/register', async function (req, res, next) {
    const newUserFirstName = req.body.firstName;
    const newUserLastName = req.body.lastName;
    const newDateOfBirth = req.body.dateOfBirth;
    const newUserName = req.body.username;
    const newEmail = req.body.email;
    const newPass = req.body.password;


    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(newPass, salt);


    users.create({
      firstName: newUserFirstName,
      lastName: newUserLastName,
      dateOfBirth: newDateOfBirth,
      username: newUserName,
      email: newEmail,
      password: hashedPassword
    }).then(result => {
      console.log(result)
      res.redirect('/login');
    }).catch(err => console.log(err))
});




router.get('/login',function(req, res, next) {
  res.render('login', {title : "New User"})
});
router.post ('/login',  passport.authenticate('local', {  successRedirect: '/album',
    failureRedirect: '/login'}), function (req, res, next){


});

router.post('/logout', authorize,(req,res,next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/login');
    });
});


router.get('/users/allUser', admin, function(req, res, next) {
    users.findAll()
        .then(result => {
            if(!users){
                res.status(404);
            }
            console.log(result);
            res.render('getAllUser', {user : result})
        })
        .catch(err => console.log(err))
})

router.get('/userProfile/:id',authorize ,function(req, res, next) {
    users.findByPk(req.params.id)
        .then(result => {
            if(!users){
                res.status(404);
            }


            res.render('userProfile', {user : result});
        })
        .catch(err => console.log(err))
})




module.exports = router;
