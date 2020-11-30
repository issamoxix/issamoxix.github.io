import './App.scss';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import React,{ useState } from 'react';
import { createGlobalStyle ,ThemeProvider} from 'styled-components'
import { lightTheme,darkTheme } from './styles/global';
import {ThemeContext} from './utils/themeContext';
import Routes from './utils/routes';


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
          {
            Routes.map((route,i)=>(
              <Route key={i}  {...route} />
            ))
          }
            
          </ThemeProvider>
          </ThemeContext.Provider>
        </Switch>
      </Router>
    </div>      
  );
}

export default App;
