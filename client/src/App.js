import React from "react";
import { BrowserRouter as Router ,Route, Switch, Redirect } from "react-router-dom";
import notes from './Components/notes/notes';
import './App.css';


class App extends React.Component{

  render()
  {
    return (
      <div className="App">
       <Router forceRefresh = {true}>
        <Switch>
          <Route exact path="/" component ={notes}/>
          <Route path="*">
            <Redirect to  = "/" />
          </Route>

        </Switch>
      </Router>
    </div>
    )
  }
}

export default App;
