

function authorize( req, res, next) {
    if(req.isAuthenticated()){
        next();
    }else{
        res.status(401);
    }
}




function admin(req, res, next){
    if(req.isAuthenticated() && req.user.isAdmin){

        next();
    }else{
        res.status(401).send('Unauthorized');

    }
}

module.exports.authorize = authorize;
module.exports.admin = admin;
