import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import VistaPrincipalUs from './pages/vistaPrincipalUsuario/VistaPrincipalUs'
import VistaInicial from './pages/vistaInicial/VistaInicial'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
				<Routes>
					<Route path='/vistaPrincipal' element={<VistaPrincipalUs />} />		
          <Route path='/*' element={<VistaInicial/>} />
				</Routes>
			</Router>
      </header>
    </div>
  );
}

export default App;
