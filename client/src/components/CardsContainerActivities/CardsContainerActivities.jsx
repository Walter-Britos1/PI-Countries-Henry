import { useSelector } from 'react-redux';
import { useState } from 'react';
import filterActivitiesBySeason from './filteredActivities';
import CardActivity from '../CardActivity/CardActivity';
import FilteredActivitiesMenu from '../FilterActivities/FilterActivies';
import styles from './CardsContainerActivities.module.css';

const CardsContainerActivities = () => {
  // Obtener todas las actividades del estado global de Redux
  const activities = useSelector((state) => state.activities);
  // Estados locales del componente
  const [selectedSeason, setSelectedSeason] = useState('');
  // Filtrar actividades por temporada seleccionada
  const filteredActivities = filterActivitiesBySeason(
    activities,
    selectedSeason
  );

  return (
    <>
      <FilteredActivitiesMenu
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
      />
      <div className={styles.activitiesContainer}>
        {filteredActivities.length === 0 ? (
          <p className={styles.noActivitiesMessage}>
            No activities match the selected criteria.
          </p>
        ) : (
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
    </>
  );
};

export default CardsContainerActivities;
