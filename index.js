
require('dotenv').config();

const express = require("express");
const cors = require('cors');


const { dbConnetion } = require('./database/config');


// Crear un servidor de express
const app = express();

//Cors

app.use(cors());

// BD

dbConnetion();

//wOphLIFwX6c0g5kF

// Rutas 
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msj: 'Hola España'
    })
});


app.listen(process.env.PORT, () => {
    console.log('Servidor Corriendo en ', process.env.PORT);    
});
