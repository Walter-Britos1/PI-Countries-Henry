const { Router } = require('express');

// Importar los controladores de países
const { getCountriesHandler, getCountriesHandlerById } = require('../handlers/countriesHandlers')

// Crear un enrutador para los países
const countriesRouter = Router();

// Ruta para obtener todos los países o buscar por nombre
countriesRouter.get('/', getCountriesHandler);

// Ruta para obtener un país por su ID
countriesRouter.get('/:idPais', getCountriesHandlerById);

// Exportar el enrutador de países
module.exports = countriesRouter;