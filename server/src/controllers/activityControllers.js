const { Activity, Country } = require("../db");

const createActivities = async (
  name,
  difficulty,
  duration,
  season,
  img,
  countries
) => {
  if (!name || !difficulty || !season) throw Error("Missing data");

  const activityCreated = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  const associatedCountries = await Country.findAll({
    where: {
      id: countries,
    },
  })

  await activityCreated.setCountries(associatedCountries);
  
  return activityCreated;
};

const getAllActivities = async () => {
  // Obtener todas las actividades con información de países relacionada
  const allActivities = await Activity.findAll({
    include: {
      model: Country,
      through: { attributes: [] }, // Excluir atributos de la tabla intermedia
    },
  });
  return allActivities;
};

const deleteActivity = async (id) => {
    // Eliminar una actividad por su ID
  const activityDeleted = await Activity.destroy({
    where: { 
      id
    },
  })
  // Indicar si la actividad fue eliminada con éxito
  return activityDeleted
}

module.exports = {
  createActivities,
  getAllActivities,
  deleteActivity
};
