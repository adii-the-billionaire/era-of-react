import React, { Component } from 'react';
import './App.css'
import Person from './Person.js'
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <h1>
          hi 
        </h1>
        <Person/>
      </div>
     );
  }
}
 
export default App;