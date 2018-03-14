exports.logInUser = function(req,res){
    console.log("authenticate.controller.js, logInUser");
    res.status(200);
    res.send('Login Successful');

};

exports.logoutUser = function(req, res){
    console.log("authenticate.controller.js, logoutUser");
    req.logout();
    req.session.destroy();
    res.status(200);
    res.send('User Logged Out SuccessFully');
};

exports.isLoggedIn = function (req,res,next) {
    if (req.isAuthenticated()){
        return next();
    }
    console.log("authenticate.controller : Invalid Login");
    res.status(401);
    res.send('Invalid LogIn: Please Log In again.');
}