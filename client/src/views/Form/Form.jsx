import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActivity } from '../../redux/actions';
import { useEffect } from 'react';
import { validateActivityForm } from './validation'

import styles from './Form.module.css';

const CrearActivity = () => {
   // Estados para almacenar los datos del formulario y manejo de estados
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [duration, setDuration] = useState('');
  const [season, setSeason] = useState('');
  const [countryId, setCountryId] = useState('');
  const [countries, setCountries] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState({})


  const dispatch = useDispatch();

  // Obtener la lista de los países al cargar el componente
  useEffect(() => {
    axios
      .get('http://localhost:3001/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log('ERROR', err));
  }, []);

  // Temporizador para mostrar y ocultar alertas de éxito
  useEffect(() => {
    let timer;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  // Temporizador para mostrar y ocultar alertas de errores
  useEffect(() => {
    let timerErr;
    if(errors) {
      timerErr = setTimeout(() => {
        setErrors({})
      }, 2000);
      return () => clearTimeout(timerErr)
    }
  })

  // Función para manejar el envío del formulario
  const handlerSubmit = (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const form = event.target;
    const name = form.name.value;
    const difficulty = form.difficulty.value;
    const duration = form.duration.value;
    const season = form.season.value;
    const countries = [countryId];

    // Validar los datos antes de enviar
    const formData = {
      name,
      difficulty,
      duration,
      season,
      countryId,
    };
    const errors = validateActivityForm(formData);

    // Si hay errores, actualiza el estado de 'errors' y evita el envío del formulario
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Crear objeto con los datos de la actividad
    const activityData = {
      name,
      difficulty,
      duration,
      season,
      countries,
    };

    // Enviar datos al store de Redux
    dispatch(addActivity(activityData));

    // Mostrar alerta de éxito y reiniciar valores del formulario
    setShowAlert(true);
    setName('');
    setDifficulty('');
    setDuration('');
    setSeason('');
    setCountryId('');
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handlerSubmit}>
        {/* ... Renderizar los campos del formulario */}
        <h1>Create Activity</h1>
        <label className={styles.label}>Name Activity:</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder='Enter name...'
        />

        <label className={styles.label}>Difficulty: </label>
        <select
          className={styles.selectField}
          name='difficulty'
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
        >
          <option selected>Select Difficulty Level:</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>

        <label className={styles.label}>Duration: </label>
        <select
          className={styles.selectField}
          name='duration'
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
        >
          <option>Select Duration of the Activity:</option>
          {Array(24) // creamos un arreglo de 24 elementos
            .fill()
            .map((_, index) => (
              // generamos elementos option por cada elemento del array
              <option key={index + 1} value={index + 1}>
                {index + 1} Hrs
              </option>
            ))}
        </select>

        <label className={styles.label}>Season :</label>
        <select
          className={styles.selectField}
          name='season'
          value={season}
          onChange={(event) => setSeason(event.target.value)}
        >
          <option>Select season option</option>
          <option value='Winter'>Winter</option>
          <option value='Spring'>Spring</option>
          <option value='Summer'>Summer</option>
          <option value='Autumn'>Autumn</option>
        </select>

        <label className={styles.label}>Select country: </label>
        <select
          className={styles.selectField}
          name='countryId'
          value={countryId}
          onChange={(event) => setCountryId(event.target.value)}
        >
          <option>Select country option</option>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>

        <button className={styles.button} type='submit'>
          Create Activity
        </button>

      </form>
      {/* Mostrar mensajes de error y éxito */}
    {errors.name && <span className={styles.errorAlert}>{errors.name}</span>}
    {errors.difficulty && <span className={styles.errorAlert}>{errors.difficulty}</span>}
    {errors.duration && <span className={styles.errorAlert}>{errors.duration}</span>}
    {errors.season && <span className={styles.errorAlert}>{errors.season}</span>}

    {showAlert && (
      <div className={styles.alert}>Activity created successfully</div>
    )}   
    </div>
  );
};

export default CrearActivity;
