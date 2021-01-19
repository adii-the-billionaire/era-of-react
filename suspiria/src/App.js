import React, { Component } from 'react';
import './App.css'
import MYINFO from './myINFO'
import Time from './time'
import TODO from './todo'
import List from './list1'
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <MYINFO />
        <Time />
        <TODO />
        <List/>
      </div>
     )
  }
}
 
export default App;
 