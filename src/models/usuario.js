const usuario = (sequelize,type)=>{
    return sequelize.define('usuarios',{
        idUsuario:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        nombre: type.STRING(99),
        correo_electronico:type.STRING(99),
        contraseña:type.STRING(99),

        crearUsuario:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        actualizarUsuario:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps:false,
    });

}

module.exports = usuario