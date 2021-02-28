import React, { Component } from 'react';
// import axios from 'axios' so our intances instead of axios
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
                <Posts/>
            </div>
        );
    }
} 

export default Blog;