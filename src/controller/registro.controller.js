const registro = {};

const passport = require('passport')

registro.mostrarRegistro = async(req, res) => {
    res.render('login/registro');
};

registro.mostrarLogin = (req, res, next) =>{
    res.render('login/login')
}

module.exports = registro;