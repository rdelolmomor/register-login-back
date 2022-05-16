const express = require('express');
//Modulo de express que permite realizar las funciones de enrutamiento con los metodos http comunes (get, post, put, patch y delete)
const authRouter = express.Router();
//Modulo personalizado donde se ha realizado la logica de las peticitiones a base de datos
const { loginData } = require('../../db/auth/index');

authRouter.post('/login', async (req,res)=>{
    try{
        const {userName, password} = req.body;
        console.log(userName);
        console.log(password);
        let result = await loginData(userName,password);
        console.log('result: ',result);
        res.status(201).send(result);
    }catch(err){
        res.status(500).send({error:err.message});
    }
});

module.exports = authRouter;