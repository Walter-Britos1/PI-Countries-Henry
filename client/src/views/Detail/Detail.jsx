import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import styles from './Detail.module.css';
import Loandig from '../../components/Loanding/Loanding';

const Detail = () => {
  const { idPais } = useParams();

  // Estados para almacenar la información del país
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const apiData = await axios.get(
          `http://localhost:3001/countries/${idPais}`
        );
        const response = apiData.data;

        if (response) {
          setCountry(response);
        }

        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError('Country not found');
      }
    };

    getDetail();
  }, [idPais]);

  // Renderiza el contenido según el estado de carga y error
  if (loading) {
    return <Loandig />;
  }

  if (error) {
    return <div className={styles.container}>{error}</div>;
  }

  // Formatea la capital eliminando las llaves {}
  const formattedCapital = country[0].capital.replace('{', '').replace('}', '');

  return (
    <div className={styles.countryDetailContainer}>
      <div className={styles.container}>
        <div className={styles.backHome}>
          <Link to='/home'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-box-arrow-left'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z'
              />
              <path
                fillRule='evenodd'
                d='M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z'
              />
            </svg>
          </Link>
        </div>
        {/* Renderiza la información detallada del país */}
        <h2>{country[0].name}</h2>
        <img
          className={styles.imgContainer}
          src={country[0].flag}
          alt={country[0].name}
        />
        <p>
          <strong>Continent:</strong> {country[0].continent}
        </p>
        <p>
          <strong>Capital:</strong> {formattedCapital}
        </p>
        <p>
          <strong>Sub-Region:</strong> {country[0].subregion}
        </p>
        <p>
          <strong>Area:</strong> {country[0].area} km2
        </p>
        <p>
          <strong>Population:</strong> {country[0].population}
        </p>

        <div>
          {/* Renderiza las actividades del país */}
          <h3>Activities:</h3>
          <ul className={styles.activitiesList}>
            {country[0].Activities && country[0].Activities.length > 0 ? (
              country[0].Activities.map((activity) => (
                <li key={activity.id} className={styles.activityItem}>
                  <strong>Name:</strong> {activity.name}
                  <br />
                </li>
              ))
            ) : (
              <li className={styles.activityItem}>
                No activities available for this country
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
