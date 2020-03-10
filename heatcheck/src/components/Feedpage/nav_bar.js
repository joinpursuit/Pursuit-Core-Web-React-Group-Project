import React from 'react';
import HomePage from '../HomePage/homePage';
import LogIn from '../HomePage/login';
import Posts from "../Feedpage/posts";
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial} from 'react-awesome-button';
import { NavLink, Route, Switch } from 'react-router-dom';


class NavBar extends React.Component{
    

    render() {
        return(
            <>
            <nav>
                    
                <NavLink exact to={"/homepage"}>

                            Home
                </NavLink>
                <br/>
                <AwesomeButton size="small" type="progress" progressLoadingTime={2000}>Login</AwesomeButton> 
                <NavLink exact to={"/Login"}></NavLink>
                <br/>
                <AwesomeButtonProgress 
                    size={"small"} 
                    type={"link"}
                    releaseDelay={500}
                    >Post
                </AwesomeButtonProgress> 
                <NavLink exact to={"/posts"}></NavLink>
            </nav>
            </>
        )
    }
}

export default NavBar;