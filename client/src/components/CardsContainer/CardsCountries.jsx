import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/actions';
import { applyFiltersAndSorting } from '../../utils/utils';
import { calculatePaginatedItems } from '../../utils/utils';
import Card from "../Card/Card";
import styles from './CardsContainer.module.css'

const CardsCountries = () => {

  const dispatch = useDispatch();

  // Obtener la página actual del estado global
  const currentPage = useSelector((state) => state.currentPage);
  const countriesPerPage = useSelector((state) => state.countriesPerPage);

  // // Obtener la lista de países del estado global
  const countries = useSelector((state) => state.countries);

  // // Obtener el filtro de continente seleccionado del estado global
  const selectedContinent = useSelector((state) => state.selectedContinent);

  // Obtener el filtro de población seleccionado del estado global
  const selectedPopulationFilter = useSelector(
    (state) => state.selectedPopulationFilter
  );


  // Mover la lógica de filtrado y ordenamiento a la función applyFiltersAndSorting
  const filteredCountries = applyFiltersAndSorting(
    countries,
    selectedContinent,
    selectedPopulationFilter,
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


  return (
    <>
    <div className={styles.cardContainer}>
       {/* Mapear y renderizar las tarjetas de país para cada país en la lista filtrada */}
      {paginatedCountries.map((country) => {
        return (
          <Card
            key={country.id}
            idPais={country.id}
            flag={country.flag}
            name={country.name}
            continent={country.continent}
          />
        );
      })}
          
    </div>
     <div className={styles.pagination}>
     {Array.from({ length: totalPages }, (_, index) => (
       <button
         key={index}
         className={currentPage === index + 1 ? styles.activePage : ''}
         onClick={() => handlePageChange(index + 1)}
       >
         {index + 1}
       </button>
     ))}
   </div>
   </>
  );
};

export default CardsCountries;

