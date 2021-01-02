import React, { Component } from "react";
class Counter extends Component {
    state = {
        count: 0,
        imageUrl:'https://picsum.photos/200' 
    }
    render() {
        React.createElement('h1')
        return ( <div>
            <img src={this.state.imageUrl } alt=""/>
            <span>{ this.formatCount()}</span>
            <button>increment</button>
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