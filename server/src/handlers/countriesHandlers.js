const { getAllCountries, getCountryById, getCountryByName } = require('../controllers/countryControllers')

// Controlador para obtener países con opción de filtrar por nombre
const getCountriesHandler = async (req, res) => {
  const { name } = req.query;

  try {
    // Si no se proporciona un nombre, obtiene todos los países
    if (!name) {
      const allCountries = await getAllCountries();
      res.json(allCountries)
    }else{
      // Si se proporciona un nombre, obtiene los países por nombre (opción de búsqueda)
      const countryByName = await getCountryByName(name);
      res.json(countryByName)
    }
  } catch (error) {
    // Manejo de errores en caso de que ocurra un problema al obtener los países
    res.status(400).json({ error: error.message })
  }
};

// Controlador para obtener un país por su ID
const getCountriesHandlerById = async (req, res) => {
  const { idPais } = req.params;

  try {
    // Llama a la función para obtener un país por su ID y envía el país en la respuesta
    const countriesId = await getCountryById(idPais);
    res.json(countriesId);

  } catch (error) {
    // Manejo de errores en caso de que ocurra un problema al obtener el país por su ID
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  getCountriesHandler,
  getCountriesHandlerById,
}