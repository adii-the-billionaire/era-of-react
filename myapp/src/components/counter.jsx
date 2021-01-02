import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
class Counter extends Component {
    state = {
        count: 0,
        // imageUrl:'https://picsum.photos/200' 
    }
    styles = {
        fontSize: 100,
        fontWeight:'bold'
    }
    render() {
        
        return ( <div>
            
            <span style = {this.styles} className="badge badge-primary m-2">{ this.formatCount()}</span>
            <button style = {{fontSize:200}} className = "btn btn-secondary btn-sm">increment</button>
        </div>
        )
    }
    formatCount() {
        const { count } = this.state
        const x = <h1>Zero</h1>
        return count ===0?x:count
    }
}

export default Counter
//we cna'nt use class property bcoz they are reserved key word so what we have instead of this className for seeting any attribute
