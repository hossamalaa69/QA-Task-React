import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Questions from './pages/Questions';
import Answers from './pages/Answers';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
  render() { 
    return ( 
      <Router>
        <div className="center">
          <Navbar />
          <Switch>
            <Route eaxct path="/question/:q_id" component={Answers} />
            <Route path="/" component={Questions} />
          </Switch>
        </div>
      </Router>
     );
  }
}
 
export default App;
