import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import classes from './App.module.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Layout>
          <BurgerBuilder>
          </BurgerBuilder>
        </Layout>
      </div>
    );
  }
}
 
export default App;



