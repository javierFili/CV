import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import VistaPrincipalUs from './pages/vistaPrincipalUsuario/VistaPrincipalUs'
import VistaInicial from './pages/vistaInicial/VistaInicial'
import InicioDeSesion from './pages/inicioDeSesion/InicioDeSesion';
import RegistroDeUsuario from './pages/registroUsuario/RegistroDeUsuario';

function App() {
  return (
    <div className="App">
      <header className="">
      <Router>
				<Routes>
					<Route path='/vistaPrincipal' element={<VistaPrincipalUs />} />		
          <Route path='/inicioDeSesion' element={<InicioDeSesion />} />	
          <Route path='/registroUsuario' element={<RegistroDeUsuario />} />	          	
          <Route path='/*' element={<VistaInicial/>} />
				</Routes>
			</Router>
      </header>
    </div>
  );
}

export default App;
