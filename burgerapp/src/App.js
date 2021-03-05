import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import classes from './App.module.css';
import Checkout from './containers/Checkout/Checkout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
class App extends Component {
  state = { 
    show:true
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({show:true})
    },5000)
  }
  render() { 
    return ( 
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}></Route>
          <Route path = "/" exact component={BurgerBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}
 
export default App;



