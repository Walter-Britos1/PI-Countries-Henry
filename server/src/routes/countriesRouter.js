const { Router } = require('express');

// handlers
const { getCountriesHandler, getCountriesHandlerById } = require('../handlers/countriesHandlers')

const countriesRouter = Router();


countriesRouter.get('/', getCountriesHandler);

countriesRouter.get('/:idPais', getCountriesHandlerById);

module.exports = countriesRouter;