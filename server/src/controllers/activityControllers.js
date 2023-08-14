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
  const allActivities = await Activity.findAll({
    include: {
      model: Country,
      through: { attributes: [] },
    },
  });
  return allActivities;
};

const deleteActivity = async (id) => {
  const activityDeleted = await Activity.destroy({
    where: { 
      id
    },
  })
}

module.exports = {
  createActivities,
  getAllActivities,
  deleteActivity
};
