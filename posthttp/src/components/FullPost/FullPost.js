import React, { Component } from 'react';
import axios from 'axios'
import classes from'./FullPost.module.css';

class FullPost extends Component {
    state = {
        postData: null,
    }
 
    componentDidUpdate() {
        if ( this.props.id ) {
            if ( !this.state.postData || ( this.state.postData && this.state.postData.id !== this.props.id ) ) {
                axios.get( '/posts/' + this.props.id ).then( response => {
                    this.setState({postData:response.data})
                } )
            }
        }
    }

    deletePostHadler = () => {
        axios.delete( '/posts/' + this.props.id ).then( response => {
           console.log(response)
        } )
}
    


    render () {
        let post = <p>Please select a Post!</p>;
        
        if ( this.props.id ) {
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