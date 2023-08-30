const axios = require('axios');
const { Country } = require("../db.js");

// Función para insertar países en la base de datos desde una API externa
const insertCountryToDB  = async () => {
  try {
    // Obtener la lista de países desde la API externa
    console.log('Fetching data from external API...');
    const response = await axios.get("http://localhost:5000/countries");
    const countriesList = response.data;

    // Verificar si la lista de países está vacía
    if (!countriesList) throw new Error('The list is empty');

    let arrayCountries = [];

    // Mapear y transformar los datos de la lista de países
    await countriesList.map(async (country) => {
      let newCountries = {
        id: country.cioc || country.cioc || country.cca3,
        name: country.name.common,
        flag: country.flags.png,
        continent: country.continents[0],
        capital: country.capital || "Capital not found",
        subregion: country.subregion || "Subregion not found",
        area: country.area,
        population: country.population,
      };
      console.log('Processing:', newCountries.name);
      arrayCountries.push(newCountries);
    });

    // Insertar los países en la base de datos utilizando bulkCreate
    console.log('Inserting countries into the database...');
    await Country.bulkCreate(arrayCountries);
    console.log('Inserting successful');
    console.log('Total countries inserting: ', countriesList.length);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  insertCountryToDB
};
