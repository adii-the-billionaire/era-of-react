import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'
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
                            <li className={classes.li}><Link to="/" >Home</Link></li>
                            <li className={classes.li}><Link to={{
                                pathname: '/m',
                                hash: '#submit',
                                search:'?quick-submit=true'
                            }} className={classes.a}>Posts</Link></li>
                            <li className={classes.li}><Link to="/new-post" className={classes.a}>NewPost</Link></li>
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
//a link jb bhi click ho rha tb bar bar hmesha data re rendered ho rha jo ki jaruri nhi for performance so let's overcome this solution 