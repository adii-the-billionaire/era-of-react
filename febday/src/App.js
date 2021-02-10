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
    }]
   }
  render() { 
    let person = []
      this.state.person.forEach( ( e ) => {
        let tip = `my name is ${ e.name } my age is ${ e.age } nd my class is ${ e.class }`
        person.push(tip)
      } )
    
    return ( 
      <div className="App">
        <h1>
          hi 
        </h1>
        <Person />
        {}
      </div>
     );
  }
}
 
export default App;