import styles from './FilterActivity.modude.css';

const FilteredActivitiesMenu = ({
  selectedSeason,
  setSelectedSeason,
  showNoActivitiesMessage,
}) => {
  return (
    <div className={styles.filterContainer}>
      {/* Dropdown para filtrar por temporada */}
      <select
        className={styles.filterSelect}
        value={selectedSeason}
        onChange={(event) => setSelectedSeason(event.target.value)}
      >
        <option value=''>Filter by Season</option>
        <option value='Spring'>Spring</option>
        <option value='Summer'>Summer</option>
        <option value='Autumn'>Autumn</option>
        <option value='Winter'>Winter</option>
      </select>
      <div className={styles.filterContainer}>
        {/* Mensaje de 'No activities' si no se encuentran actividades */}
        {/* ... */}
        {showNoActivitiesMessage && (
          <p className={styles.noActivitiesMessage}>
            No activities match the selected criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default FilteredActivitiesMenu;
