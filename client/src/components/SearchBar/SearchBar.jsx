import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchCountriesByName } from '../../redux/actions';
import { clearFilters } from '../../redux/actions';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  // Estado local para almacenar el valor de búsqueda del país en el input
  const [searchCountry, setSearchCountry] = useState('');
  
  const dispatch = useDispatch();

  const handlerSearch = () => {
    dispatch(searchCountriesByName(searchCountry));
  };

  // maneja el evento de clic del botón 'Clear Filters' para despachar la acción clearFilters:
  const handleClearFilters = () => {
    dispatch(clearFilters());
    setSearchCountry(''); // Limpia el valor del input
  };

  return (
    <div className={styles.container}>
      <input
        type='text'
        placeholder='Search Country...'
        value={searchCountry} // Asigna el valor del input al estado
        onChange={(event) => setSearchCountry(event.target.value)} // Maneja el cambio del input
      />
      <button className={styles.buttonSearch} onClick={handlerSearch}>Search</button>
      <button onClick={handleClearFilters}>Clear search</button>
    </div>
  );
};

export default SearchBar;
