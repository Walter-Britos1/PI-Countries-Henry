const { Router } = require('express');

// Importar los controladores de actividades
const { createActivityHandler, getActivitiesHandler, deleteActivitiesHandler } = require('../handlers/activitiesHandlers')

// Crear un enrutador para las actividades
const activitiesRouter = Router()

// Ruta para obtener todas las actividades
activitiesRouter.get('/', getActivitiesHandler);

// Ruta para crear una nueva actividad
activitiesRouter.post('/', createActivityHandler);

// Ruta para eliminar una actividad por su ID
activitiesRouter.delete('/:id', deleteActivitiesHandler)

// Exportar el enrutador de actividades
module.exports = activitiesRouter;