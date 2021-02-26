import React, { Component } from 'react';
import axios from 'axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPost_id: null,
        error:false
    }
    componentDidMount() {
        axios.get( 'https://jsonplaceholder.typicode.com/posts' ).then( response => {
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

     idStateChangeHandler = (id) => {
    this.setState({selectedPost_id:id})
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
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost_id} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;