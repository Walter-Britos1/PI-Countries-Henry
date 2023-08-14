import { ADD_ACTIVITY, 
  CLEAR_FILTERS, 
  GET_ACTIVITIES, 
  GET_COUNTRIES, 
  SEARCH_COUNTRIES_BY_NAME,
  FILTER_BY_CONTINENT, 
  FILTER_BY_POPULATION,
  SORT_COUNTRIES_ASCENDING,
  SORT_COUNTRIES_DESCENDING,
  RESET_FILTERS_AND_SORT,
  DELETE_ACTIVITY,
  SET_CURRENT_PAGE
 } from "./actionsType";

const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  selectedContinent: null,
  selectedPopulationFilter: null, // Agrega el estado del filtro de población
  sortOrder: 'none',
  currentPage: 1,      // Página actual
  countriesPerPage: 10, // Cantidad de países por página
};


const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // maneja la acción GET_COUNTRIES para cargar al estado todos los paises
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
        allCountries: payload,
      };

    // maneja la acción SEARCH_COUNTRIES_BY_NAME para buscar un pais por su nombre
    case SEARCH_COUNTRIES_BY_NAME:
      return {
        ...state,
        countries: payload,
      };

    // maneja la acción CLEAR_FILTERS para restaurar el estado countries a su valor original:
    case CLEAR_FILTERS:
      return {
        ...state,
        countries: state.allCountries,
      };

    // maneja la acción FILTER_BY_CONTINENT para filtrar por continentes
    case FILTER_BY_CONTINENT:
      return {
        ...state,
        selectedContinent: payload,
      };

    case FILTER_BY_POPULATION:
      return {
        ...state,
        selectedPopulationFilter: payload,
      }

    // maneja la acción SORT_COUNTRIES_ASCENDING:
    case SORT_COUNTRIES_ASCENDING: 
      return {
        ...state,
        sortOrder: 'ascending', // Establece la dirección de orden en ascending
        countries:  [...state.countries].sort((a, b) => a.name.localeCompare(b.name)),
      }

    case SORT_COUNTRIES_DESCENDING: 
      return {
        ...state,
        sortOrder: 'descending', // Establece la dirección de orden en descendente
        countries:  [...state.countries].sort((a, b) => b.name.localeCompare(a.name)),
      }

    case RESET_FILTERS_AND_SORT:
      return {
        ...state,
        selectedContinent: null,
        selectedPopulationFilter: null,
        sortOrder: null,
      };

    // maneja la acción ADD_ACTIVITY para agregar una actividad al estado original:
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: payload,
      };

    // maneja la acción GET_ACTIVITIES para obtener todas las actividades del estado:
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };
    
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(activity => activity.id !== payload),
      };
    
    case SET_CURRENT_PAGE: 
      return {
        ...state, 
        currentPage: payload
      };

    default:
      return {
        ...state,
      };
  }
};


export default rootReducer;
