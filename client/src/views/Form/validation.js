// Función de validación del formulario de actividad
export const validateActivityForm = (activityData) => {
  const errors = {};

  // Verifica si el campo 'name' está vacío
  if (!activityData.name) {
    errors.name = 'Please fill in all fields correctly before submitting.';
  }

  // Verifica si el campo 'difficulty' está vacío
  if (!activityData.difficulty) {
    errors.difficulty = 'Please fill in all fields correctly before submitting.';
  }

  // Verifica si el campo 'duration' está vacío
  if (!activityData.duration) {
    errors.duration = 'Please fill in all fields correctly before submitting.';
  }

  // Verifica si el campo 'season' está vacío
  if (!activityData.season) {
    errors.season = 'Please fill in all fields correctly before submitting.';
  }

  // Verifica si el campo 'countryId' está vacío
  if (!activityData.countryId) {
    errors.countryId = 'Please fill in all fields correctly before submitting.';
  }

  return errors;
};
