import { useDispatch } from 'react-redux'
import { deleteActivity } from '../../redux/actions';
import styles from './CardActiviry.module.css';

const CardActivity = ({ id, name, difficulty, duration, season, country }) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    // Despacha la acción para eliminar la actividad (tanto en Redux como en el servidor)
    dispatch(deleteActivity(id));
  };


  return (
    <div className={styles.card}>
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.property}>
          <strong>Difficulty: </strong>
          <span className={styles.difficulty}>{difficulty}</span>
        </p>
        <p className={styles.property}>
          <strong>Duration: </strong>
          <span className={styles.duration}>{duration} Hrs</span>
        </p>
        <p className={styles.property}>
          <strong>Season: </strong>
          <span className={styles.season}>{season}</span>
        </p>
        <p className={styles.property}>
          <strong>Country: </strong>
          <span className={styles.country}>{country ? country.name : 'Unknown'}</span>
        </p>
        <button className={styles.deleteButton} onClick={handleDelete}>
        Delete Activity
      </button>
      </div>
    </div>
  );
};

export default CardActivity;
