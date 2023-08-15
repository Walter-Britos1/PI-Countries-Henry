const { createActivities, getAllActivities, deleteActivity } = require('../controllers/activityControllers')

// Controlador para crear una nueva actividad
const createActivityHandler = async (req, res) =>{
  const { name, difficulty, duration, season, img, countries } = req.body;
  console.log("Request Body:", req.body);
  try {
     // Llama a la función para crear una actividad y captura la nueva actividad creada
    const newActivity = await createActivities( name, difficulty, duration, season, img, countries )

    // Envía una respuesta con el código de estado 201 y la actividad creada
    res.status(201).json({
      activity_Created: newActivity
    })
  } catch (error) {
    // Manejo de errores en caso de que ocurra un problema durante la creación de la actividad
    res.status(400).json({ error: error.message })
  }
};

// Controlador para obtener todas las actividades
const getActivitiesHandler = async (req, res) => {

  try {
    // Llama a la función para obtener todas las actividades y envía la lista en la respuesta
    const activities = await getAllActivities()
    res.json(activities);
  } catch (error) {
    // Manejo de errores en caso de que ocurra un problema al obtener las actividades
    res.status(400).json({ error: error.message });
  }
};

// Controlador para eliminar una actividad por su ID
const deleteActivitiesHandler = async (req, res) => {
  const { id } = req.params
  try {
    // Llama a la función para eliminar una actividad por su ID
    const deletedActivity = deleteActivity(id)

    // Envía una respuesta de éxito después de eliminar la actividad
    res.json('Activity_successfully deleted')
  } catch (error) {
    // Manejo de errores en caso de que ocurra un problema al eliminar la actividad
    res.status(500).json({ error: error.message })
  }
};

module.exports = {
  createActivityHandler,
  getActivitiesHandler,
  deleteActivitiesHandler
};