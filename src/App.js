import React,{useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/ui/Login'
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
  
      <BrowserRouter>
        <Switch>
          <Route exact path="/login"
            render={props => (
              <Login
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          
        </Switch>
      </BrowserRouter>

  );
}

export default App;
