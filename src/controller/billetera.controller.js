const formulario = {}

const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

formulario.mostrar = (req, res) => {
    res.render('billetera/agregar');
}

formulario.mandar = async (req, res) => {
    const id = req.params.id; // Utiliza el mismo nombre de variable
    const idUsuario = req.user.idUsuario; // Utiliza el mismo nombre de variable

    const { alias, propietario } = req.body;
    const nuevaBilletera = {
        alias,
        propietario,
        usuarioIdUsuario: idUsuario
    };

    await orm.billetera.create(nuevaBilletera);
    req.flash('success', 'Guardado');
    res.redirect('/billetera/lista/'+ id);
};

formulario.lista = async(req, res) => {
    const lista = await sql.query('select * from billeteras')
    res.render('billetera/lista', {lista})
}

module.exports = formulario