const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

// Obtener todos los países con sus actividades relacionadas
const getAllCountries = async () => {
  const countries = await Country.findAll({
    include: {
      model: Activity,
      through: { attributes: [] } // Excluir atributos de la tabla intermedia
    }
  });
  return countries;
};

// Obtener un país por su ID
const getCountryById = async (id) => {

  const countryId = await Country.findAll({
    where: {
      id: id.toUpperCase() // Convertir a mayúsculas para buscar sin distinción de mayúsculas/minúsculas
    },
    include: Activity
  });
  return countryId;
};

// Obtener países por nombre (búsqueda por coincidencia parcial, sin distinción de mayúsculas/minúsculas)
const getCountryByName = async (name) => { 
  const countryName = await Country.findAll({
    where: { 
      name: {
        [Op.iLike]: `%${name}%` // Búsqueda insensible a mayúsculas/minúsculas
      }
    },
    include: {
      model: Activity,
      through: { attributes: [] } // Excluir atributos de la tabla intermedia
    },
  });
  return countryName;
};

module.exports = {
  getAllCountries,
  getCountryById,
  getCountryByName
}