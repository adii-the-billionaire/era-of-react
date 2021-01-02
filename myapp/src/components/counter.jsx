import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Counter extends Component {
    state = {
        count: 1,
        // imageUrl:'https://picsum.photos/200'
        tags: [
            'ram','siya','lakshman','hanuman'
        ]
    };
    //here is how to rendering the tags element in the browser so let's start something doing here is the code baby 
    tag() {
        if ( this.state.tags.length === 0 ) {
            return <h1>there are no tags</h1>
        }
        return <h1> here is our tag list :
       <p><ul>{ this.state.tags.map( ( tag ) => {
            return <li key={tag}>{tag}</li>
       } )}</ul></p>
            </h1>
    }
    styles = {
        fontSize: 100,
        fontWeight: "bold",
    };
    render() {
        let classes = "badge m-2 badge-"
        classes += (this.state.count===0)?"warning":"primary"
        return (
            <div>
                <span style={this.styles} className={classes}>  {this.formatCount()}
                </span>
                <button style={
                { fontSize: 200 } }
            className = "btn btn-secondary btn-sm">
                    increment  </button> 
                {this.tag()}
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