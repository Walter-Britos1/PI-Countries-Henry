import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'; 
import styles from './NavBar.module.css';
import Filters from '../Filters/Filters';

const NavBar = () => {
 
  return (
    <div className={styles.navBar}>
        <Filters />
      <div className={styles.navLinks}>
        <Link to='/home'>HOME</Link>
        <Link to='/form'>CREATE ACTIVITY</Link>
        <Link to='/activities'>ACTIVITIES LIST</Link>
        <SearchBar />
        <Link to='/'>go out</Link>
      </div>
    </div>
  );
};

export default NavBar;


 