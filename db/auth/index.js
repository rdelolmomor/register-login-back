//Modulo personalizado para realizar las querys a la base de datos
const { query } = require('../query');
//Se importa el pool de conexiones
const { defaultPool } = require('../pools');

async function loginData(userName,hashPwd){
    try{
        const queryString = `
        SELECT T_USERS.NAME, T_ROLES.NAME FROM T_USERS
        INNER JOIN T_USER_ROLES ON T_USER_ROLES.USER_ID = T_USERS.ID
        INNER JOIN T_ROLES ON T_ROLES.ID = T_USER_ROLES.ROL_ID 
        WHERE USERNAME = :userName AND PASSWORD= :hashPwd
        `;
        const result = await query(defaultPool, queryString, {userName,hashPwd});
        return result.rows[0];
    }catch(err){
        console.log('Error en loginData: ',err)
        throw err;
    }
}

module.exports.loginData = loginData;