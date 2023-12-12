const registro = {};

const passport = require('passport')

registro.mostrarRegistro = async(req, res) => {
    res.render('login/registro');
};

registro.Registro = passport.authenticate('local.signup', {
    successRedirect: '/login',
    failureRedirect: '/registro',
    failureFlash: true
});

registro.mostrarLogin = (req, res, next) =>{
    res.render('login/login')
}

//login
registro.Login = passport.authenticate('local.signin', {
    successRedirect: '/principal',
    failureRedirect: '/login',
    failureFlash: true
});

module.exports = registro;