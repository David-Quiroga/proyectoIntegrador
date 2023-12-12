const formulario = {}

formulario.mostrar = async(req, res) => {
    res.render('formulario/formulario');
}

module.exports = formulario