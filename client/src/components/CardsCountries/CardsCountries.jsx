import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';
import {
  applyFiltersAndSorting,
  calculatePaginatedItems,
} from './utils';
import Card from '../Card/Card';
import styles from './CardsContainer.module.css';

const CardsCountries = () => {
  const dispatch = useDispatch();

  // Obtener la página actual del estado global
  const currentPage = useSelector((state) => state.currentPage);
  const countriesPerPage = useSelector((state) => state.countriesPerPage);

  // Obtener la lista de países del estado global
  const countries = useSelector((state) => state.countries);

  // Obtener el filtro de continente seleccionado del estado global
  const selectedContinent = useSelector((state) => state.selectedContinent);

  // Obtener el filtro de población seleccionado del estado global
  const selectedPopulationFilter = useSelector(
    (state) => state.selectedPopulationFilter
  );

  // Mover la lógica de filtrado y ordenamiento a la función applyFiltersAndSorting
  const filteredCountries = applyFiltersAndSorting(
    countries,
    selectedContinent,
    selectedPopulationFilter
  );

  // Calcular la lista de países paginados usando la función calculatePaginatedItems
  const paginatedCountries = calculatePaginatedItems(
    filteredCountries,
    currentPage,
    countriesPerPage
  );


  // Manejar el cambio de página
  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

     // Agregar lógica para mostrar hasta 5 botones de paginación y botones de página anterior y siguiente
   const visiblePageNumbers = [];
   const maxVisiblePages = 5;

   for (let i = Math.max(1, currentPage - 2); i <= Math.min(currentPage + 2, totalPages); i++) {
    visiblePageNumbers.push(i);
  }


  return (
    <>
      <div className={styles.cardContainer}>
        {/* Mapear y renderizar las tarjetas de país para cada país en la lista paginada */}
        {paginatedCountries.map((country) => (
          <Card
            key={country.id}
            idPais={country.id}
            flag={country.flag}
            name={country.name}
            continent={country.continent}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>Prev...</button>
        )}

        {visiblePageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={currentPage === pageNumber ? styles.activePage : ''}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}

        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>Next...</button>
        )}
      </div>
    </>
  );
};

export default CardsCountries;
