const { Sequelize } = require("sequelize");

const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI, } = require("../keys");

const sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
	host: MYSQLHOST,
	port: MYSQLPORT,
	dialect: 'mysql'
});

// const sequelize = new Sequelize(
// 	'facturacion',
// 	'root',
// 	'',
// 	{
// 	  host: 'localhost',
// 	  dialect: 'mysql',
// 	  pool: {
// 		max: 5,
// 		min: 0,
// 		require: 30000,
// 		idle: 10000
// 	  }
// 	}
//   )

sequelize.authenticate()
	.then(() => {
		console.log("conectado");
	})
	.catch((err) => {
		console.log("no se conecto");
	});

sequelize.sync({ force: false })
	.then(() => {
		console.log("tablas sincronizadas");
	});

	const usuarioModel = require('../models/usuario')
	const billeteraModel = require('../models/billetera')
	const datosPersonalesModel = require('../models/datos_personales')
	const datosBancariosModel = require('../models/datos_bancarios')
	
	//! sincronia
	
	const usuario = usuarioModel(sequelize, Sequelize)
	const billetera = billeteraModel(sequelize, Sequelize)
	const datosPersonales = datosPersonalesModel(sequelize, Sequelize)
	const datosBancarios = datosBancariosModel(sequelize, Sequelize)
	
	//relacion usuario-billetera
	usuario.hasMany(billetera)
	billetera.belongsTo(usuario)
	
	//relacion tienda-factura
	billetera.hasMany(datosBancarios)
	datosBancarios.belongsTo(billetera)
	
	//relacion factura-cliente
	billetera.hasMany(datosPersonales)
	datosPersonales.belongsTo(billetera)
	module.exports = {
		usuario,
		billetera,
		datosBancarios,
		datosPersonales
	};
