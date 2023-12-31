import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';
import CardsCountries from '../../components/CardsCountries/CardsCountries';
import Filters from '../../components/Filters/Filters';


const Home = () => {
  const dispatch = useDispatch();
  
  // Carga los países al montar el componente usando useEffect y la acción getCountries
  useEffect(() => {
    dispatch(getCountries()) // Despacha la acción para obtener los países
  },[dispatch])

  return (
    <div>
      <Filters />
      <CardsCountries />
    </div>
  );
};

export default Home;