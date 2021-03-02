import React, { Component } from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import classes from './Posts.module.css'
class Posts extends Component {
    state = { 
        posts: [],
    }
    idStateChangeHandler = ( id ) => {
        this.setState( { selectedPost_id: id } )
    }
    componentDidMount() {
         console.log(this.props)
        axios.get( '/posts' ).then( response => {
            const posts = response.data.slice( 0, 4 )
            const tip = posts.map( ( post ) => {
                return {
                    ...post,
                    author:'adii'
                }
            })
            this.setState({posts:tip})
        } ).catch( e => {
            console.log( e )
            this.setState({error:true})
        })
    }
    render() { 
        let posts = <p style={{textAlign:'center'}}>something went wrong</p>
        if ( !this.state.error ) {
            posts = this.state.posts.map( post => {
            return <Post title={post.title} key={post.id} author={post.author}
                clicked={() =>  this.idStateChangeHandler( post.id ) }/>   
        }) 
        }
        return (  
            <section className={classes.Posts}>
                {posts}
            </section>
        );
    }
}
 
export default Posts;