import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home'
import Cities from './pages/Cities'

function App() {
  const city = "Seoul";
  return (
    <Router>
     <div className="App">
         <Header region="KR" cityName={city} />
         <ul className="menu">
           <li>
             <Link to="/">Home</Link></li>
           <li>
             <Link to="/About">About</Link></li>
           <li>
           <Link to="/cities">Cities</Link></li>
         </ul>

         <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cities">
            <Cities />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

     </div>
    </Router>
  );
}

export default App;
