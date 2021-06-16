import logo from './assets/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar/NavBar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route path="/category/:categoryId">
            <ItemListContainer/>
          </Route>
          <Route exact path="/item/:itemId">
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
