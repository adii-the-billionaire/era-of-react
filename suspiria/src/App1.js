import React, { Component } from 'react';
class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            answer: 'Yes',
            isLoggedIn:false
        }
    }
    sia = () => {
        this.setState({isLoggedIn: true })
    }
    render() { 
        let word 
        if ( !this.state.isLoggedIn ) {
            word = 'you are log out'
        } else {
            word = 'you are login'
        }
        return ( 
            <div>
                <h1>Is state important to know
                 
             </h1>
                <h1>You are log </h1>
                <button onClick={this.sia}>Button</button>
                <h1>{ word}</h1>
            </div>
         );
    }
}
 
export default App;
//make an button that shows logged in or log out so here is our code 
