import React from 'react';
import HomePage from '../HomePage/homePage';
import LogIn from '../HomePage/login';
import Posts from "../Feedpage/posts";
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
import { NavLink, Route, Switch } from 'react-router-dom';


class NavBar extends React.Component{
    

    render() {
        return(
            <>
            <nav>
                <AwesomeButton size="small" type="primary">Homepage</AwesomeButton> 
                <NavLink exact to={"/homepage"}></NavLink>
                <br/>
                <AwesomeButton size="small" type="primary">Login</AwesomeButton> 
                <NavLink exact to={"/Login"}></NavLink>
                <br/>
                <AwesomeButton size="small" type="primary">Post</AwesomeButton> 
                <NavLink exact to={"/posts"}></NavLink>
            </nav>
            </>
        )
    }
}

export default NavBar;