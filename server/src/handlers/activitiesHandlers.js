const { createActivities, getAllActivities, deleteActivity } = require('../controllers/activityControllers')

const createActivityHandler = async (req, res) =>{
  const { name, difficulty, duration, season, img, countries } = req.body;
  console.log("Request Body:", req.body);
  try {
    const newActivity = await createActivities( name, difficulty, duration, season, img, countries )
    res.status(201).json({
      activity_Created: newActivity
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

const getActivitiesHandler = async (req, res) => {

  try {
    const activities = await getAllActivities()
    res.json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

};

const deleteActivitiesHandler = async (req, res) => {
  const { id } = req.params
  try {
    const deletedActivity = deleteActivity(id)
    res.json('Activity_successfully deleted')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

module.exports = {
  createActivityHandler,
  getActivitiesHandler,
  deleteActivitiesHandler
};