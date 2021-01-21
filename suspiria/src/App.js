import React, { Component } from 'react';
import './App.css'
import MYINFO from './myINFO'
import Time from './time'
import TODO from './todo'
import List from './list1'
import Sia from './CLASS'
import Index from './index1'
import Apppp from './App1'
import Rnd from './rnd'
import Butt from './buton'
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
        <Apppp />
        <Rnd />
        <Butt/>
      </div>
      
     )
  }
}
 
export default App;
 