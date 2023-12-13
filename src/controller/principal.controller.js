const principal = {}

principal.mostrar = async(req, res) => {
    res.render('principal/principal');
}
principal.Mostrar = async(req, res) => {
    res.render('billetera/agregar')
}

module.exports = principal