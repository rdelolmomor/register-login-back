const oracle = require('oracledb');
const connection = require('./connection');
const { nanoid } = require('nanoid');

/*
const pools = {
  get: nanoid(10),
  update: nanoid(10),
  auth: nanoid(10),
};

//función autoejecutable al importar el modulo
(async () => {
  try {
    await Promise.all(Object.values(pools).map(async pool => createPool(pool)));
    console.log('-'.padStart(50, '-'));
    console.log('$ Database pools initialized.');
    console.log('-'.padStart(50, '-'));
  } catch (err) {
    process.exit(1);
  }
})();
*/

const defaultPool = nanoid(10);

//función autoejecutable al importar el modulo. Ejecuta createPool recibiendo el alias generado aleatoriamente
(async () =>{
    try{
        const pool = await createPool(defaultPool);
        console.log('-'.padStart(50, '-'));
        console.log(`$ Database pool ${pool.poolAlias} initialized.`);
        console.log('-'.padStart(50, '-'));
    }catch(err){
        process.exit(1);
    }
})();

async function createPool(poolAlias) {
  try {
    const { user, password, connectString } = connection;
    return await oracle.createPool({user, password, connectString, poolAlias});
  } catch (err) {
    console.error(`Error creating pool ${poolAlias}: `, err);
    throw err;
  }
}

module.exports = { /*pools,*/ defaultPool };
