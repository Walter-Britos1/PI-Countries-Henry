import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getActivities } from '../../redux/actions';
import CardsContainerActivities from '../../components/CardsContainerActivities/CardsContainerActivities'


const Activity = () => {
  const dispatch = useDispatch();

  // Se ejecuta una vez al cargar el componente para obtener las actividades.
  useEffect(() => {
    dispatch(getActivities())
  }, [dispatch])

  return (
    <div>
       {/* Renderiza el componente CardsContainerActivities para mostrar las actividades */}
      <CardsContainerActivities />

    </div>
  )
};

export default Activity;