import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';


class NavBar extends React.Component{
    

    render() {
        return(
            <>
            <nav>
                <NavLink exact to={"/posts"}>Posts</NavLink>
                <NavLink exact to={"/comment-form"}>Log In</NavLink>
                <NavLink exact to={"/homepage"}>Home</NavLink>
                <NavLink exact to={"/upload"}>Upload</NavLink>
            </nav>
            </>
        )
    }
}

export default NavBar;