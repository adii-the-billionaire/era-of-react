import React, { Component } from 'react'
class Meme extends Component {
    constructor () {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'https://i.imgflip.com/1bij.jpg',
            allMemeImgs:[]
        }
        this.handleChange = this.handleChange.bind( this )
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        fetch( 'https://api.imgflip.com/get_memes' ).then( response => response.json() ).then( response => {
            const {memes} = response.data
            this.setState({allMemeImgs:memes})
        })
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({[name]:value})
    }
    handleSubmit( event ) {
        event.preventDefault()
        const randNum = Math.floor( Math.random() * this.state.allMemeImgs.length )
        const randomImgs = this.state.allMemeImgs[randNum].url
        this.setState({randomImg:randomImgs})
    }
    render() { 
        return (  
             <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        name="topText" placeholder="Top Text"
                    value={this.state.topText} onChange={this.handleChange}></input>
                    <input
                        type="text" value={this.state.bottomText} name="bottomText" placeholder ="Bottom Text" onChange={this.handleChange}
                    ></input>
                    <button>Gen</button>
                    <h2>{this.state.topText}</h2>
                    <br />
                    <br />
                    <br />
                     <br/>
                    <h2>{this.state.bottomText }</h2>
                </form>
                <div>
                    <img src={this.state.randomImg} alt="">
                    </img></div>
                
            </div>
        );
    }
}
 
export default Meme;