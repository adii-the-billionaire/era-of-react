import React, { Component } from 'react'
import './index.css'
import Board from './board.js'
class Game extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App">
                <div className="game">
                    
                    <div className="App">
                        
                        <Board/>
                    </div>
                    <div className="game-info">
                        <div>{ /* status */}</div>
                        <ol>{ /*TODO*/}</ol>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Game;