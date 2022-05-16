//SE IMPORTA EL CONECTOR DE LA BASE DE DATOS
 const oracledb = require("oracledb");


 async function query(pool, query, params = {}) {
    try {
      //Se crea la conexión
      var connection = await oracledb.getConnection(pool);
      //Con el metodo execute del objeto de la conexión se realiza la query
      return await connection.execute(query, params);
    } catch (err) {
      console.error('Error executing query:', err);
      throw err;
    }
}

module.exports.query = query;



