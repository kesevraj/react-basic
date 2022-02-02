import React from 'react';

import { Component } from 'react';

import Navbar from './components/navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Users from './components/users';
import UserDetails from './components/userdetails';




class App extends Component {
  
  render(){
    return(
      <React.Fragment>
       <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='userList' element={<Users/>}>
       <Route path='userDetail/:id' element={<UserDetails/>}/>
       </Route>
     
      
         
      </Routes>
      
      </React.Fragment>
    )
  }

}

export default App