const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const getAllCountries = async () => {
  const countries = await Country.findAll({
    include: {
      model: Activity,
      through: { attributes: [] }
    }
  });
  return countries;
};


const getCountryById = async (id) => {

  const countryId = await Country.findAll({
    where: {
      id: id.toUpperCase()
    },
    include: Activity
  });
  return countryId;
};

const getCountryByName = async (name) => { 
  
  const countryName = await Country.findAll({
    where: { 
      name: {
        [Op.iLike]: `%${name}%`
      }
    },
    include: {
      model: Activity,
      through: { attributes: [] }
    },
  });
  return countryName;
};

module.exports = {
  getAllCountries,
  getCountryById,
  getCountryByName
}