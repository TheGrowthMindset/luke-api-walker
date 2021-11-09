import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import Info from './components/Info'; 

// you have to import Browser Router to be able to route ////with useHistory
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h2>Luke Api Walker</h2>
          <Search></Search>
          <switch>
            <Route path = "/:category/:id">
                <Info></Info>
            </Route>
          </switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
