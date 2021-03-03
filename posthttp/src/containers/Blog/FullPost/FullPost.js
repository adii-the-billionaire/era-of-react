import React, { Component } from 'react';
import axios from 'axios'
import classes from'./FullPost.module.css';

class FullPost extends Component {
    state = {
        postData: null,
    }
 
    componentDidMount() {
        console.log(this.props)
        this.loadData()
    }

    componentDidUpdate() {
    this.loadData()
    }
    
    loadData() {
        if ( this.props.match.params.id ) {
            if ( !this.state.postData || ( this.state.postData && this.state.postData.id !== parseInt(this.props.match.params.id)  ) ) {
                axios.get( '/posts/' + this.props.match.params.id ).then( response => {
                    this.setState({postData:response.data})
                } )
            }
        }
    }

    deletePostHadler = () => {
        axios.delete( '/posts/' + this.props.match.params.id ).then( response => {
           console.log(response)
        } )
}
    


    render () {
        let post = <p>Please select a Post!</p>;
        
        if ( this.props.match.params.id ) {
           post = <p>Loading.....</p>
        }
        if ( this.state.postData ) {
             post = (
            <div className={classes.FullPost}>
                    <h1>{this.state.postData.title }</h1>
                    <p>{ this.state.postData.body}</p>
                <div className={classes.Edit}>
                    <button className={classes.Delete} onClick={this.deletePostHadler  }>Delete</button>
                </div>
            </div>
        )
        }
        return post;
    }
}

export default FullPost;