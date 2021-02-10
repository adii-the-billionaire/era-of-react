import React, { Component } from 'react';
import './App.css'
import Person from './Person.js'
class App extends Component {
  state = { 
    person: [{
      name: 'Adi',
      class: 23,
      age: '21'
    },
    {
      name: 'Adii',
      class: 24,
      age: '21'
      },
    {
      name: 'Adiii',
      class: 25,
      age: '21'
      } ],
    toggle:false
  }
  switchNameHandler = (name) => {
    this.setState( {
      person: [
        {
      name: name,
      class: 23,
      age: '21'
    },
    {
      name: name,
      class: 24,
      age: '21'
      },
    {
      name: name,
      class: 25,
      age: '21'
    }
      ],
      toggle:true
    })
  }

  nameChangeHandler = ( event ) => {
    this.setState( {
      persoons: [
        {name:event.target.value,age:28},
        {name:event.target.value,age:29},
        {name:event.target.value,age:90}
      ]
    })
  }
  render() { 
    return ( 
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <button onClick={()=>{this.switchNameHandler('riya')} }>click</button>
        <Person name={this.state.person[ 0 ].name} click = {this.switchNameHandler.bind(this,'miak')}  changed ={this.nameChangeHandler} />
        <Person name={this.state.person[ 1 ].name}  changed = {this.nameChangeHandler}  />
        <Person name = {this.state.person[2].name} changed = {this.nameChangeHandler} />
      </div> 
     );
  }
}
 
export default App;
