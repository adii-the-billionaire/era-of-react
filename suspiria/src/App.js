import React, { Component } from 'react';
import './App.css'
import MYINFO from './myINFO'
import Time from './time'
import TODO from './todo'
import List from './list1'
import Sia from './CLASS'
import Index from './index1'
import Apppp from './App1'
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <MYINFO /> 
        <Time />
        <TODO />
        <List />
        <Sia />
        <Index />
        <Apppp/>
      </div>
     )
  }
}
 
export default App;
 