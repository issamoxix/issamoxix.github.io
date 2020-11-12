import './App.scss';
import About from './pages/About'
import Landing from './pages/Landing'
import NavBar from './Components/NavBar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
function App() {
  return (
    <div className="container">
      <Router>
      {/* <NavBar /> */}
        <Route path="/" exact component={Landing} />
        <Route path="/About" exact component={About} />
        <Route path="/Skills" exact component={Skills} />
        <Route path="/Projects" exact component={Projects} />
      </Router>
    </div>
  );
}

export default App;
