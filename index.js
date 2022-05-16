/*APLICATION PROGRAMING INTERFACE*/ 

/*REST*/

/*Express. Modulo para creación de servidor, endpoints y middlewares*/
const express = require('express');
const app = express();


//Importación de modulos personalizados
const loginRouter = require('./routes/auth')


/*MIDDLEWARES*/
//Middleware para CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//Middleware necesario para tratamiento correcto de objetos json
app.use(express.json())
//Middleware personalizado para atender peticiones en la ruta /users, el modulo importado tendrá los metodos que atiendan dichas peticiones
app.use('/users',loginRouter);




const PORT = 5010;
//El metodo listen que levanta el servidor es asincrono, recibe el puerto y una función de callback que se ejecutará cuando el servidor se encuentre ya levantado
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});

