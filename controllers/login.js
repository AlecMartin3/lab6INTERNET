
exports.loginLogout = (req,res,next) => {
    let username = req.body.name;
    let password = req.body.password;
    console.log("controller: " + username + " " + password);

    if(username == "A01059594" && password == "password"){
        res.redirect(301, '/artists');
    }else{
        res.render('login',{layout: "login"});
    }
    
};