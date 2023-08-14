import axios from 'axios'

import {
  GET_COUNTRIES,
  GET_ACTIVITIES,
  ADD_ACTIVITY,
  SEARCH_COUNTRIES_BY_NAME,
  CLEAR_FILTERS,
  FILTER_BY_CONTINENT,
  FILTER_BY_POPULATION,
  SORT_COUNTRIES_ASCENDING,
  SORT_COUNTRIES_DESCENDING,
  RESET_FILTERS_AND_SORT,
  DELETE_ACTIVITY,
  SET_CURRENT_PAGE 
} from './actionsType';

// agregamos una acción para obtener todos los paises.
export const getCountries = () => {
  return async (dispatch) => {
    try {
      // Hacer una solicitud a la API para obtener todos los países.
      const api = await axios.get('http://localhost:3001/countries');
      const countries = api.data;
      // Despachar la acción con los países obtenidos.
      dispatch({
        type: GET_COUNTRIES,
        payload: countries
      });
    } catch (error) {
      // Manejo de error en caso de fallo en la solicitud.
      alert('Something went wrong please contact support');
    }
  };
};

// agregamos una acción para buscar paises por nombre.
export const searchCountriesByName = (name) => {
  return async (dispatch) => {
    try {
      if(name === '') alert('Please enter one name country')
      // Hacer una solicitud a la API para buscar países por nombre.
      const api = await axios.get(`http://localhost:3001/countries?name=${name}`)
      const filteredCountries = api.data;
      // Despachar la acción con los países filtrados por nombre.
      dispatch({
        type: SEARCH_COUNTRIES_BY_NAME,
        payload: filteredCountries
      })
    } catch (error) {
      // Manejo de error en caso de fallo en la solicitud.
      alert('Something went wrong please contact support')
    }
  }
};

// agregamos una acción para limpiar los filtros.
export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS,
  }
};

// agregamos una acción para filtrar por continentes.
export const filterByContinent = (continent) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent
  }
};

// agregamos una acción para el filtrado por población.
export const filterByPopulation = (filterType) => {
  return {
    type: FILTER_BY_POPULATION,
    payload: filterType
  }
};

// agregamos una acción para el orden alfabetico ascendente
export const sortCountriesAscending = () => ({
  type: SORT_COUNTRIES_ASCENDING,
});

// agregamos una acción para el orden alfabetico descendente
export const sortCountriesDescending = () => ({
  type: SORT_COUNTRIES_DESCENDING,
});

export const resetFiltersAndSort = () => ({
  type: RESET_FILTERS_AND_SORT,
});


// agregamos una acción para agregar actividades.
export const addActivity = (activityData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/activities', activityData);
      const activityCreated = response.data;
      // Despachar la acción para agregar actividades.
      dispatch({
        type: ADD_ACTIVITY,
        payload: activityCreated
      });
    } catch (error) {
      // Manejo de error en caso de fallo en la solicitud.
      alert('Error adding activity:');
    }
  };
};

// agregamos una acción para obtener todas las actividades.
export const getActivities = () => {
  return async (dispatch) => {
    try {
      // Hacer una solicitud a la API para obtener todas las actividades.
      const api = await axios.get('http://localhost:3001/activities');
      const activities = api.data;
      // Despachar la acción con las actividades obtenidas.
      dispatch({
        type: GET_ACTIVITIES,
        payload: activities
      })
    } catch (error) {
      // Manejo de error en caso de fallo en la solicitud.
      alert('Something went wrong please contact support');
    }
  }
};

export const deleteActivity = (id) => {
  return async (dispatch) => {
    try {
      // Realizar la solicitud DELETE al servidor
      await axios.delete(`http://localhost:3001/activities/${id}`);

      // Despachar la acción para eliminar la actividad en el estado de Redux
      dispatch({
        type: DELETE_ACTIVITY,
        payload: id,
      });
    } catch (error) {
      console.error('Error deleting activity:', error);
    }
  };
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  }
};
