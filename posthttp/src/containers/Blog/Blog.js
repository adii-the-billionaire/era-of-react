import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom'
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
                            <li className={classes.li}><NavLink to="/" exact>Home</NavLink></li>
                            <li className={classes.li}><NavLink to={{
                                pathname: '/m',
                                hash: '#submit',
                                search:'?quick-submit=true'
                            }} className={classes.a}>Posts</NavLink></li>
                            <li className={classes.li}><NavLink to='/new-post'
                             className={classes.a}>NewPost</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/m" exact component={Posts} />
                <Route path='/new-post' exact component={NewPost}></Route>
                <Route path="/:id" exact component={ FullPost}/>
            </div>
        ); 
    }
}

export default Blog;
//a link jb bhi click ho rha tb bar bar hmesha data re rendered ho rha jo ki jaruri nhi for performance so let's overcome this solution 