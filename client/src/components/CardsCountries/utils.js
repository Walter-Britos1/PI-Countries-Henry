// Funcion para el filtrado 
// Aplica filtros y ordenamiento a la lista de países.
// Devuelve una nueva lista de países que cumple con los filtros seleccionados.
export const applyFiltersAndSorting = (
  countries,                // Lista completa de países
  selectedContinent,        // Continente seleccionado (o null si no se seleccionó)
  selectedPopulationFilter // Filtro de población seleccionado (higherPopulation, lowerPopulation o null)
) => {
  console.log("Countries before filtering:", countries);

  let filteredCountries = selectedContinent
    ? countries.filter((country) => country.continent === selectedContinent)
    : countries;

    console.log("Countries after continent filtering:", filteredCountries);

  // Ordena la lista filtrada según el filtro de población seleccionado
  if (selectedPopulationFilter === 'higherPopulation') {
    filteredCountries.sort((a, b) => b.population - a.population);
  } else if (selectedPopulationFilter === 'lowerPopulation') {
    filteredCountries.sort((a, b) => a.population - b.population);
  }

  console.log("Countries after population sorting:", filteredCountries);

  return filteredCountries;
};

// Calcula y devuelve una lista paginada de elementos basada en la página actual y el tamaño de página.
export const calculatePaginatedItems = (filteredCountries, currentPage, itemsPerPage) => {
  // Calcula los índices de los elementos en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Devuelve una sub-lista de elementos que pertenecen a la página actual
  const paginatedItems = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);
  return paginatedItems;
};
