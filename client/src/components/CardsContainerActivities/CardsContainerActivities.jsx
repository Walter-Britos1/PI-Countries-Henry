import { useSelector } from 'react-redux';
import filterActivitiesBySeason from './filteredActivities';
import CardActivity from '../CardActivity/CardActivity';
import styles from './CardsContainerActivities.module.css';

const CardsContainerActivities = () => {
  const activities = useSelector((state) => state.activities);
  const selectedSeason = useSelector((state) => state.selectedSeason);

  // Filtrar las actividades localmente en función de la temporada seleccionada
  const filteredActivities = filterActivitiesBySeason(
    activities,
    selectedSeason
  );

  return (
    <div className={styles.activitiesContainer}>
      {filteredActivities.length === 0 ? (
        <p className={styles.noActivitiesMessage}>No activities match the selected criteria.</p>
      ) : (
        // Map over filteredActivities and render CardActivity components
        filteredActivities.map((activity) => (
          <CardActivity
            key={activity.id}
            id={activity.id}
            name={activity.name}
            img={activity.img}
            difficulty={activity.difficulty}
            duration={activity.duration}
            season={activity.season}
            country={activity.Countries[0]}
          />
        ))
      )}
     
    </div>
  );
};
export default CardsContainerActivities;

