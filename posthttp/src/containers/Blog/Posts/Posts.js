import React, { Component } from 'react'
import axios from '../../../axios'
import {Route} from 'react-router-dom'
import Post from '../../../components/Post/Post'
 import {Link} from 'react-router-dom'
import classes from './Posts.module.css'
import FullPost from '../FullPost/FullPost';
class Posts extends Component {
    state = { 
        posts: [],
    }
    idStateChangeHandler = ( id ) => {
        // this.setState( { selectedPost_id: id } )
        this.props.history.push({pathname:'/posts/'+id})
    }
    componentDidMount() {
         console.log(this.props.match)
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
                return (
                   <Link to ={'/posts/'+ post.id} key={post.id}>
                      <Post title={post.title} key={post.id} author={post.author}
                      clicked={() => this.idStateChangeHandler( post.id )} />
                </Link>
                )    
        }) 
        }
        return (  
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <Route path='/posts/:id' exact component={ FullPost}/>
            </div>
        );
    }
}
 
export default Posts;
//{... this.props}
