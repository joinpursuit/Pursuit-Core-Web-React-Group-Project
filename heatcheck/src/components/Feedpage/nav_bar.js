import React from 'react';
import { NavLink } from 'react-router-dom';
//

class NavBar extends React.Component{
    

    render() {
        return(
            <>
            <nav>
                <NavLink exact to={"/post"}>Make A post</NavLink>
                <NavLink exact to={"/feedPage"}>Home Feed</NavLink>
                <NavLink exact to={"/homePage"}>Home Page</NavLink>
            </nav>
            </>
        )
    }
}
//

export default NavBar;