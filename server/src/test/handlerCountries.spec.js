const { getAllCountries, getCountryByName  } = require('../controllers/countryControllers');

// Prueba para el controlador getAllCountries
test('getAllCountries should return an array of countries', async () => {
  // Llamamos a la función del controlador para obtener todos los países
  const countries = await getAllCountries();
  // Aseguramos que el resultado es un array y que tiene al menos un país
  expect(Array.isArray(countries)).toBe(true);
  expect(countries.length).toBeGreaterThan(0);
});

// Prueba para el controlador getCountryByName
test('getCountryByName should return an array of countries matching the name', async () => {
  const countryName = 'Argentina'; // Nombre de país para buscar
  // Llamamos a la función del controlador para buscar países por nombre
  const countries = await getCountryByName(countryName);
   // Aseguramos que el resultado es un array y que tiene al menos un país que coincide con el nombre
  expect(Array.isArray(countries)).toBe(true);
  expect(countries.length).toBeGreaterThan(0);
});
