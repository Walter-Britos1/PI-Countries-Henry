const { getAllCountries, getCountryById, getCountryByName } = require('../controllers/countryControllers')

const getCountriesHandler = async (req, res) => {
  const { name } = req.query;

  try {
    if (!name) {
      const allCountries = await getAllCountries();
      res.json(allCountries)
    }else{
      const countryByName = await getCountryByName(name);
      res.json(countryByName)
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

const getCountriesHandlerById = async (req, res) => {
  const { idPais } = req.params;

  try {

    const countriesId = await getCountryById(idPais);
    res.json(countriesId);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  getCountriesHandler,
  getCountriesHandlerById,
}