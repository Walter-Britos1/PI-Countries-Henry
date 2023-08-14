import { useSelector } from 'react-redux';
import CardActivity from '../CardActivity/CardActivity'
import styles from './CardsContainerActivities.module.css'

const CardsContainerActivities = () =>{
  // Obtener la lista de actividades desde el estado de Redux
  const activities = useSelector(state => state.activities)
  

  console.log(activities);

  return (
    <div className={styles.activitiesContainer}>
    {activities.length === 0 ? ( // Verifica si no hay actividades
      <p className={styles.noActivitiesMessage}>No activities have been created yet.</p>
    ) : (
      // Mapear y renderizar cada actividad como un componente CardActivity
      activities.map((activity) => (
        <CardActivity 
          key={ activity.id}
          id={ activity.id }
          name={ activity.name }
          img={ activity.img }
          difficulty={ activity.difficulty }
          duration={ activity.duration }
          season={ activity.season }
          country={activity.Countries[0]}
        /> 
      ))
    )}
   
  </div>
)
};

export default CardsContainerActivities;