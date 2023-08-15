// Este es un módulo de funciones que filtra las actividades por temporada seleccionada
const filterActivitiesBySeason = (activities, selectedSeason) => {
  return activities.filter(activity => {
    if (selectedSeason === '') {
      return true; // Si no hay filtro, mostrar todas las actividades
    } else {
      return activity.season === selectedSeason; // Mostrar actividades con la temporada seleccionada
    }
  });
};

export default filterActivitiesBySeason;
