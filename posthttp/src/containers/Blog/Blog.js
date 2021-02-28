import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Posts from './Posts/Posts'
import classes from './Blog.module.css';
import NewPost from './NewPost/NewPost'
 class Blog extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul className={classes.ul}>
                            <li className={classes.li}><a href="/" >Home</a></li>
                            <li className={classes.li}><a href="/new-post" className={classes.a}>NewPost</a></li>
                            <li className={classes.li}><a href="/m" className={classes.a}>Posts</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/m" exact component={Posts} />
                <Route path='/new-post' exact component={NewPost}></Route>
            </div>
        ); 
    }
}

export default Blog;