import {  Route, Routes, useLocation } from 'react-router-dom';
import { Landing, Home, CrearActivity, Detail, Activity } from './views';
import NavBar from './components/NavBar/NavBar';

function App() {

  const location = useLocation();


  return (
    <div>

      {
        location.pathname !== '/' && <NavBar />
      }

      <Routes>
        <Route exact={true} path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/:idPais' element={<Detail />} />
        <Route path='/form' element={<CrearActivity />} />
        <Route path='/activities' element={<Activity />} />
      </Routes>
    </div>
  );
}

export default App
