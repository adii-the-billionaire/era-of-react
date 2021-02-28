import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Posts from './Posts/Posts'
import classes from './Blog.module.css';

 class Blog extends Component {
    render() {
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
                <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path = "/m" exact component = {Posts}/>
            </div>
        );
    }
}

export default Blog;