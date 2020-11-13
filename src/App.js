import './App.scss';
import About from './pages/About'
import Landing from './pages/Landing'
import NavBar from './Components/NavBar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Skills from './pages/Skills';
import React,{ createContext,useState } from 'react';
import Projects from './pages/Projects';
import { createGlobalStyle ,ThemeProvider} from 'styled-components'
import { lightTheme,darkTheme } from './styles/global';
import {ThemeContext} from './utils/themeContext';
function App() {
  const GlobalStyle = createGlobalStyle`
  body {
    background-color:${({theme})=>theme.bg_color}
  }
`

const [theme,setTheme] = useState(false)
  return (
    
    <div className="container">
      <Router>
      
        <Switch>
          <ThemeContext.Provider value={{theme,setTheme}}>

          <ThemeProvider theme={!theme?darkTheme:lightTheme}>
          <GlobalStyle />
          <Route path="/" exact component={Landing} />
          <Route path="/About" exact component={About} />
          <Route path="/Skills" exact component={Skills} />
          <Route path="/Projects" exact component={Projects} />
          </ThemeProvider>
          </ThemeContext.Provider>
        </Switch>
      </Router>
    </div>      
  );
}

export default App;
