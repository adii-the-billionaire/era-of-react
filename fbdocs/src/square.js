import React, { Component } from 'react'
import './index.css'
import './App.css'
class Square extends Component {
    render() {
        return ( 
            <button className="square" onClick={()=>this.props.sia()}>
               {this.props.value}
                </button>   
         );
    }
}
 
export default Square;