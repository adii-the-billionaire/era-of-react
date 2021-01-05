import React, { Component } from 'react';
import './App.css';
import Person from './person';

class App extends Component {
   state = {
        person: [
            {name:'Mia',age:90},
            {name:'Shasha',age:90},
            {name:'Grey',age:90}
        ]
    }
  switchHandler = (event) => {
    this.setState( {
      person: [
        { name: event, age: 90 },
        { name: 'sia', age: 90 },
        { name: 'tia', age: 90 }
      ]
    })
  }
  nameChangeHandler = ( event ) => {
 this.setState( {
      person: [
        { name: 'mia', age: 90 },
        { name: 'sia', age: 90 },
        { name: event.target.value, age: 90 }
      ]
    })
  }
  render() { 
    return (
      <div className="App">
        <button onClick = {()=>{this.switchHandler('mahiyaaaa')}}></button>
        <Person name ={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age= {this.state.person[1].age} />
        <Person name={this.state.person[2].name} age={ this.state.person[2].age} click={this.switchHandler} changed = {this.nameChangeHandler}>
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

