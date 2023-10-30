import { Sequelize  } from "sequelize";

//Conexión a la base de datos nombre de la base de datos, usuario, contraseña
const sequelize = new Sequelize('******', '******', '*******', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;
