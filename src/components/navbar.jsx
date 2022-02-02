import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <navbar>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="userList">users</NavLink>
                </navbar>
          
            </div>
          
        );
    }
}
 
export default Navbar;