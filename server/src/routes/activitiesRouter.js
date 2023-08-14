const { Router } = require('express');

// handlers
const { createActivityHandler, getActivitiesHandler, deleteActivitiesHandler } = require('../handlers/activitiesHandlers')

const activitiesRouter = Router()


activitiesRouter.get('/', getActivitiesHandler);

activitiesRouter.post('/', createActivityHandler);

activitiesRouter.delete('/:id', deleteActivitiesHandler)

module.exports = activitiesRouter;