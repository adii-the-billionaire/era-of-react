import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Counter extends Component {
    state = {
       value : this.props.value,
    };
    handleIncrement = product => {
        console.log(product)
        this.setState({value:this.state.count+1})
    }
    
    
    styles = {
        fontSize: 40,
        fontWeight: "bold",
    };
    getBadgeClasses() {
         let classes = "badge m-2 badge-"
         return classes += (this.state.count===0)?"warning":"primary"
    }
  
    render() {
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>  {this.formatCount()}
                </span>
                <button onClick={this.handleIncrement} style={
                { fontSize: 40 } }
            className = "btn btn-secondary btn-sm">
                    increment  </button> 
                
                        </div>
        )
        
    }
    formatCount() {
        const { count } = this.state;
        const x = <h1> Zero </h1>;
        return count === 0 ? x : count;
    }
}

export default Counter;
//we cna'nt use class property bcoz they are reserved key word so what we have instead of this className for seeting any attribute