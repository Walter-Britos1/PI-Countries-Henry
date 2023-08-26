import { useState } from 'react';
import styles from './FilterActivity.module.css';

const FilteredActivitiesMenu = ({
  setSelectedSeason,
}) => {
  const [selectedSeason, setSelectedSeasonLocal] = useState('');
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const handleButtonFilter = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  const handleSeasonChange = (event) => {
    const season = event.target.value;
    setSelectedSeasonLocal(season);
    setSelectedSeason(season);
    setShowFilterOptions(false); // Cerrar las opciones al seleccionar una temporada
  };

  return (
    <div className={styles.filteredActivitiesContainer}>
    <div className={styles.filterGroup}>
      <div className={styles.buttonAndOptions}>
        <button
          className={styles.filterButton}
          onClick={handleButtonFilter}
          aria-expanded={showFilterOptions}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-filter'
            viewBox='0 0 16 16'
          >
            <path d='M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z' />
          </svg>
        </button>
        {showFilterOptions && (
          
            <select
              className={styles.selectFilter}
              value={selectedSeason}
              onChange={handleSeasonChange}
            >
              <option value=''>All</option>
              <option value='Spring'>Spring</option>
              <option value='Summer'>Summer</option>
              <option value='Autumn'>Autumn</option>
              <option value='Winter'>Winter</option>
            </select>
          
        )}
      </div>
    </div>
  </div>
  );
};

export default FilteredActivitiesMenu;
