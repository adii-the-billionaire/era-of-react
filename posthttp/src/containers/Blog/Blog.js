import React, { Component } from 'react';
// import axios from 'axios' so our intances instead of axios
import axios from '../../axios'
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
                <header>
                    <nav>
                        <ul className={classes.ul}>
                            <li className={classes.li}><a href="/" >Home</a></li>
                            <li className={classes.li}><a href="/" className={classes.a}>Home</a></li>
                            <li className={classes.li}><a href="/" className={classes.a}>Home</a></li>
                        </ul>
                    </nav>
                </header>
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