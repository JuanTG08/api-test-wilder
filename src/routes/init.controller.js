// Creamos la instancia de la ruta por defecto en express
const { Router } = require('express');

const router = Router();

// Importamos funciones de nuestro controlador
const { init } = require('../controller/init.controller');

router.route('/')
    .get(init)

module.exports = router;