import { Route, Routes, useLocation } from 'react-router-dom';
import { Landing, Home, CreateActivity, Detail, Activity } from './views';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';

axios.defaults.baseURL = 'http://localhost:3001/';
function App() {
  // Obtener la ubicación actual de la ruta
  const location = useLocation();

  return (
    <div>
      {
        /* Mostrar la barra de navegación en todas las rutas, excepto en la página de inicio */
        location.pathname !== '/' && <NavBar />
      }

      <Routes>
        <Route exact={true} path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/:idPais' element={<Detail />} />
        <Route path='/form' element={<CreateActivity />} />
        <Route path='/activities' element={<Activity />} />
      </Routes>
    </div>
  );
}

export default App;
