import { useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { 
  filterByContinent, 
  filterByPopulation, 
  sortCountriesAscending,
  sortCountriesDescending,
  resetFiltersAndSort,
} from '../../redux/actions';
import styles from './Filters.module.css'

const Filters = () => {
  // Estado local para controlar la visibilidad de los filtros adicionales.
  const [showAdditionalFilters, setShowAdditionalFilters] = useState(false);
 
  const dispatch = useDispatch();

  // Obtener el filtro de continente seleccionado del estado global.
  const selectedContinent = useSelector((state) => state.selectedContinent);

  // Obtener el filtro de población seleccionado del estado global.
  const selectedPopulationFilter = useSelector(
    (state) => state.selectedPopulationFilter
  );

  // Manejar el cambio para mostrar/ocultar los filtros adicionales.
  const handleToggleAdditionalFilters = () => {
  setShowAdditionalFilters(!showAdditionalFilters);
  };

  // Manejar el cambio en el filtro de continente.
  const handleFilterChange = (event) => {
    const selectedContinent = event.target.value;
    dispatch(filterByContinent(selectedContinent));
  };

  // Manejar el cambio en el filtro de población.
  const handlePopulationFilterChange = (event) => {
    const selectedPopulationFilter = event.target.value;
    dispatch(filterByPopulation(selectedPopulationFilter));
  };

  // Manejar el clic en el botón para limpiar los filtros
  const handleClearFilters = () => {
    dispatch(filterByContinent(null)); // Pasa null para eliminar el filtro
    dispatch(filterByPopulation(null)); // También limpia el filtro de población
  };

   // Manejar el clic en el botón para ordenar en sentido ascendente.
  const handleSortAscending = () => {
    dispatch(sortCountriesAscending());
    dispatch(resetFiltersAndSort());
  };

  // Manejar el clic en el botón para ordenar en sentido descendente.
  const handleSortDescending = () => {
    dispatch(sortCountriesDescending());
    dispatch(resetFiltersAndSort());
  };

  // Renderizar los componentes de filtro y botones según el estado.
  return (
    <div className={styles.filtersContainer}>
      {/* Menú desplegable para opciones adicionales */}
      <div className={styles.filterGroup}>
        <button
          className={styles.moreFiltersButton}
          onClick={handleToggleAdditionalFilters}
        >
          Filters
        </button>
        {showAdditionalFilters && (
          <div className={styles.additionalFilters}>
            <div className={styles.filterGroup}>
              {/* Dropdown para filtrar por continente */}
              <label className={styles.filterLabel}>
                Filter by continents:
              </label>
              <select
                className={styles.filterSelect}
                value={selectedContinent}
                onChange={handleFilterChange}
              >
                <option value='Africa'>Africa</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
                <option value='Asia'>Asia</option>
                <option value='South America'>South America</option>
                <option value='North America'>North America</option>
                <option value='Antarctica'>Antarctica</option>
              </select>
            </div>

            <label className={styles.filterLabel}>Filter by population:</label>
            {/* Dropdown para filtrar por población */}
            <div className={styles.filterGroup}>
              <select
                className={styles.filterSelect}
                value={selectedPopulationFilter}
                onChange={handlePopulationFilterChange}
              >
                <option value='higherPopulation'>Higher population</option>
                <option value='lowerPopulation'>Lower population</option>
              </select>
            </div>
            <button onClick={handleSortAscending}>Sort A-Z</button>
            <button onClick={handleSortDescending}>Sort Z-A</button>
          </div>
        )}
      </div>

      {/* Botón para limpiar los filtros */}
      <button className={styles.clearButton} onClick={handleClearFilters}>
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;