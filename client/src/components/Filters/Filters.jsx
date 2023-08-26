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
      <button
        className={styles.moreFiltersButton}
        onClick={handleToggleAdditionalFilters}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-filter'
          viewBox='0 0 16 16'
        >
          <path d='M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z' />
        </svg>
      </button>
      {showAdditionalFilters && (
        <div className={styles.filterGroup}>
          {/* Dropdown para filtrar por continente */}
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

          {/* Dropdown para filtrar por población */}
          <select
            className={styles.filterSelect}
            value={selectedPopulationFilter}
            onChange={handlePopulationFilterChange}
          >
            <option value='higherPopulation'>Higher population</option>
            <option value='lowerPopulation'>Lower population</option>
          </select>

          <button onClick={handleSortAscending}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-sort-alpha-down'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z'
              />
              <path d='M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z' />
            </svg>
          </button>
          <button onClick={handleSortDescending}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-sort-alpha-up'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z'
              />
              <path d='M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z' />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Filters;