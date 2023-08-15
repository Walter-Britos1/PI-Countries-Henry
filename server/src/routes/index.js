const { Router } = require("express");

// Importar los enrutadores de países y actividades
const countriesRouter = require('./countriesRouter');
const activitiesRouter = require('./activitiesRouter');

// Crear el enrutador principal
const router = Router();

// Usar el enrutador de países para las rutas /countries
router.use('/countries', countriesRouter);

// Usar el enrutador de actividades para las rutas /activities
router.use('/activities', activitiesRouter);

// Exportar el enrutador principal
module.exports = router;
