const datosPersonales=(sequelize,type)=>{
    return sequelize.define('datos_personales',{
        idDatosPersonales:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        titulo: type.STRING,
        descripcion: type.STRING,
        fecha: type.STRING,

        crearDatosPersonales:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        actualizarDatosPersonales:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps:false,
    });
}
module.exports = datosPersonales