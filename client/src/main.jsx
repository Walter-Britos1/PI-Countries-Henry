import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './main.css'

// Renderizar la aplicación en el elemento con el id 'root' utilizando el enfoque de React Concurrent Mode
ReactDOM.createRoot(document.getElementById('root')).render(
   // Proporcionar el estado global del store a la aplicación mediante el Provider de Redux
  <Provider store={store}>
    <BrowserRouter> {/* Configurar el enrutamiento utilizando BrowserRouter */}
      <App /> {/* Renderizar la aplicación principal */}
    </BrowserRouter>
  </Provider>,
)
