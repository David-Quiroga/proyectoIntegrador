const principal = {}

principal.mostrar = async(req, res) => {
    res.render('principal/principal');
}

module.exports = principal