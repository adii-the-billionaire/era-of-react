import React, { Component } from 'react';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
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
                            <li className={classes.li}><NavLink to='/posts' 
                                className={classes.a} activeClassName="my-active" activeStyle={{color:'blueviolet',textDecoration:'underline'}}>Posts</NavLink></li>
                             <li className={classes.li}><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search:'?quick-submit=true'
                            }} className={classes.a}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>   
                <Switch>
                    <Route path='/new-post' exact component={NewPost}></Route>
                    <Route path="/posts" component={Posts} />
                    <Redirect from = '/' to = '/posts'/>
                </Switch>
            </div>
        ); 
    }
}

export default Blog;
//a link jb bhi click ho rha tb bar bar hmesha data re rendered ho rha jo ki jaruri nhi for performance so let's overcome this solution 