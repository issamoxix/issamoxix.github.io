import './App.scss';
import Home from './pages/Home';
import NavBar from './Components/NavBar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="container">
      <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
