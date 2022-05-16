//Modulo personalizado para realizar las querys a la base de datos
const { query } = require('../query');
//Se importa el pool de conexiones
const { defaultPool } = require('../pools');

async function loginData(userName,password){
    try{
        const queryString = `
        SELECT T_ROLES.NAME FROM T_USER_ROLES, T_ROLES
        WHERE T_ROLES.ID = T_USER_ROLES.ROL_ID AND T_USER_ROLES.USER_ID = (
            SELECT T_USER_ROLES.USER_ID FROM T_USERS, T_USER_ROLES
            WHERE T_USERS.ID = T_USER_ROLES.USER_ID AND T_USERS.USERNAME = :userName AND T_USERS.PASSWORD = :password
        )`;
        const params = {userName,password};
        const result = await query(defaultPool, queryString, params);
        console.log('resultado: ', result);
        return result.rows[0];
    }catch(err){
        console.log('Error en loginData: ',err)
        throw err;
    }
}

module.exports.loginData = loginData;