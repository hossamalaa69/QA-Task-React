import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Questions from './pages/Questions';

class App extends Component {
  render() { 
    return ( 
        <div className="center">
          <Navbar />
          <Questions />
        </div>
     );
  }
}
 
export default App;
