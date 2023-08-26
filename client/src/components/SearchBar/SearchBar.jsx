import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchCountriesByName } from '../../redux/actions';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  // Estado local para almacenar el valor de búsqueda del país en el input
  const [searchCountry, setSearchCountry] = useState('');
  // Estado del menu desplegable
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);
  
  const dispatch = useDispatch();

  // Dispactch de la accion para buscar paises por nombre
  const handleSearch = (event) => {
    event.preventDefault(); // Evita la recarga de la página
    dispatch(searchCountriesByName(searchCountry));
  };


  return (
    <div className={styles.container}>
      {searchMenuOpen ? (
        <>
          <button
            className={styles.menuButton}
            onClick={() => setSearchMenuOpen(false)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-search'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </button>
          <form className={styles.searchForm}>
            <input
              type='text'
              placeholder='Search Country...'
              value={searchCountry}
              onChange={(event) => setSearchCountry(event.target.value)}
            />
            <button className={styles.buttonSearch} onClick={handleSearch} type='button'>
              Search
            </button>
          </form>
        </>
      ) : (
        <button
          className={styles.menuButton}
          onClick={() => setSearchMenuOpen(true)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-search'
            viewBox='0 0 16 16'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
