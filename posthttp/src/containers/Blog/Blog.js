import React, { Component } from 'react';
import {Route,NavLink,Switch} from 'react-router-dom'
import Posts from './Posts/Posts'
import classes from './Blog.module.css';
import NewPost from './NewPost/NewPost'

import FullPost from './FullPost/FullPost';
 class Blog extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul className={classes.ul}>
                            <li className={classes.li}><NavLink to='/'
                                className={classes.a}>Home</NavLink></li>
                             <li className={classes.li}><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search:'?quick-submit=true'
                            }} className={classes.a}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>   
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path='/new-post' exact component={NewPost}></Route>
                    <Route path="/posts/:id" exact component={ FullPost}/>
                </Switch>
            </div>
        ); 
    }
}

export default Blog;
//a link jb bhi click ho rha tb bar bar hmesha data re rendered ho rha jo ki jaruri nhi for performance so let's overcome this solution 