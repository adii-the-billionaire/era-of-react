import React, { Component } from 'react'
import Condition from './condition'
class App extends Component {
    constructor () {
        super()
        this.state = {
            isLoading:true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState( {
                isLoading:false
            })
        }, 1500);
    }
    render() { 
        return ( 
            <div>
                <Condition isLoading = {this.state.isLoading} />
            </div>
         );
    }
}
 
export default App;