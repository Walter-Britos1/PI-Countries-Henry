import { Link } from 'react-router-dom';
import styles from './Landing.module.css'
const Landing = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, do you want to know a little about the world?</h1>
      <Link className={styles.link} to="/home">
        <button className={styles.button}>Click Here To Start! </button>
      </Link>
      <h3></h3>
    </div>
  );
};

export default Landing;
