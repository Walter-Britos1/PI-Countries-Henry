// Funcion para el filtrado 
// Aplica filtros y ordenamiento a la lista de países.
// Devuelve una nueva lista de países que cumple con los filtros seleccionados.
export const applyFiltersAndSorting = (
  countries,                // Lista completa de países
  selectedContinent,        // Continente seleccionado (o null si no se seleccionó)
  selectedPopulationFilter // Filtro de población seleccionado (higherPopulation, lowerPopulation o null)
) => {
  let filteredCountries = selectedContinent
    ? countries.filter((country) => country.continent === selectedContinent)
    : countries;

  // Ordena la lista filtrada según el filtro de población seleccionado
  if (selectedPopulationFilter === 'higherPopulation') {
    filteredCountries.sort((a, b) => b.population - a.population);
  } else if (selectedPopulationFilter === 'lowerPopulation') {
    filteredCountries.sort((a, b) => a.population - b.population);
  }

  return filteredCountries;
};

// Calcula y devuelve una lista paginada de elementos basada en la página actual y el tamaño de página.
export const calculatePaginatedItems = (items, currentPage, itemsPerPage) => {
  // Calcula los índices de los elementos en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Devuelve una sublista de elementos que pertenecen a la página actual
  const paginatedItems = items.slice(indexOfFirstItem, indexOfLastItem);
  return paginatedItems;
};
