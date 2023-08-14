const axios = require('axios');
const { Country } = require("../db.js");

const insertCountryToDB  = async () => {
  try {
    const response = await axios.get("http://localhost:5000/countries");
    const countriesList = response.data;

    if (!countriesList) throw new Error('The list is empty');

    let arrayCountries = [];

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
      arrayCountries.push(newCountries);
    });
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
