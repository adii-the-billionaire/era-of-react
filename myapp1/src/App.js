import React, { Component } from 'react';
import './App.css';
import  Person from'./person'
class App extends Component {
  state = {  }
  render() { 
    return (
      <div className="App">
        <Person name = "Max" age="89" />
        <Person name ="Manu" age= "29" />
        <Person name="mIa" age="24" >
          My hobbies:Racing
        </Person>
        <Person name="si" age="90"/>
        <h1>Hi, I'm React App</h1>
      </div>
      // React.createElement( 'div', { className : "App" }, React.createElement('h1',null,'hi fella hw the hell are you'))
     );
  }
}
//this is javascript at the end this compiled to this code
export default App ;

