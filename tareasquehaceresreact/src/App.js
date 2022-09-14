import './App.css';
import Cards from './components/Cards';
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Cards/>        
        
        <Cards />
      </header>
    </div>
  );
}

export default App;
