const datosBancarios=(sequelize,type)=>{
    return sequelize.define('datos_bancarios',{
        idDatosBancarios:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        numero_cuenta: type.STRING(99),
        numero_tarjeta: type.STRING(99),
        fecha: type.STRING(99),
        tipo_de_cuenta:type.STRING(99),
        
        crearDatosBancarios:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        actualizarDatosBancarios:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, { timestamps:false,

    });

}
module.exports = datosBancarios