import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';
import CardsCountries from '../../components/CardsContainer/CardsCountries';


const Home = () => {
  const dispatch = useDispatch();
  

  // Carga los países al montar el componente usando useEffect y la acción getCountries
  useEffect(() => {
    dispatch(getCountries()) // Despacha la acción para obtener los países
  },[dispatch])

  return (
    <>
    {/* Renderiza el componente CardsCountries para mostrar la lista de países */}
      <CardsCountries />
    </>
  
  );
};

export default Home;