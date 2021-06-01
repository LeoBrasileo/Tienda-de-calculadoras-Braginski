import logo from './assets/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar/NavBar.js';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer tittle="Bienvenido a la tienda de calculadoras" message="Apreta el carrito para comprar"/>
    </div>
  );
}

export default App;
