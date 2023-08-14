import { Link } from 'react-router-dom'

import styles from './Card.module.css'

const Card = ({ flag, name, continent, idPais }) => {
  return (
    <div className={styles.card}>
      <img src={flag} alt='Flag' />
      <h2><strong>Name: </strong>{name}</h2>
      <p><strong>Continent: </strong> {continent}</p>
      <Link to={`/${idPais}`}>More details</Link>
    </div>
  )
};

export default Card;