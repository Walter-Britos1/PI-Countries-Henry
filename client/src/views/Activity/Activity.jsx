import { useEffect, useState } from 'react'; // Importa useState
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from '../../redux/actions';
import CardsContainerActivities from '../../components/CardsContainerActivities/CardsContainerActivities';
import FilteredActivitiesMenu from '../../components/FilterActivitiesMenu/FilterActiviesMenu';
import { setSelectedSeason } from '../../redux/actions';
import Loandig from '../../components/Loanding/Loanding'; // Importa el componente Loading

const Activity = () => {
  const selectedSeason = useSelector((state) => state.selectedSeason);

  const dispatch = useDispatch();

  const handleSeasonChange = (season) => {
    dispatch(setSelectedSeason(season));
  };

  const [isLoading, setIsLoading] = useState(true); // Estado local para el estado de carga

  // Se ejecuta una vez al cargar el componente para obtener las actividades.
  useEffect(() => {
    dispatch(getActivities())
      .then(() => {
        // Una vez que los datos se hayan cargado, cambia el estado de carga a falso
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching activities:', error);
        setIsLoading(false); // En caso de error, también cambia el estado de carga a falso
      });
  }, [dispatch]);

  return (
    <div>
      {isLoading ? ( // Renderiza el componente Loading mientras isLoading sea verdadero
        <Loandig />
      ) : (
        // Muestra el contenido real una vez que isLoading sea falso
        <>
          <FilteredActivitiesMenu
            selectedSeason={selectedSeason}
            setSelectedSeason={handleSeasonChange}
          />
          <CardsContainerActivities />
        </>
      )}
    </div>
  );
};

export default Activity;

