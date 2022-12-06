// Importamos las librerias necesarias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Creamos la instancia del servidor APP
const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Establecemos el port del servidor
app.set('PORT', 8000);

// Importamos las rutas
const index = require('./routes/init.controller');

// Creamos las rutas necesarias
app.use('/', index);

// Exportamos el app
module.exports = app;