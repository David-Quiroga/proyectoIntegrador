const billetera = (sequelize,type)=>{
    return sequelize.define('billeteras',{
        idBilletera:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        alias: type.STRING,
        propietario: type.STRING,

        crearBilletera:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        actualizarBilletera:{
            type:'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, { timestamps:false,

    });

}
module.exports = billetera