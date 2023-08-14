import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from './Detail.module.css'

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
        setError("Country not found");
      }
    };

    getDetail();
  }, [idPais]);

  // Renderiza el contenido según el estado de carga y error
  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.container}>{error}</div>;
  }

  console.log(country);

  // Formatea la capital eliminando las llaves {}
  const formattedCapital = country[0].capital.replace("{", "").replace("}", "");

  return (
    <div className={styles.container}>
      {/* Renderiza la información detallada del país */}
      <h2>{country[0].name}</h2>
      <img className={styles.imgContainer} src={country[0].flag} alt={country[0].name} />
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
  );
};

export default Detail;
