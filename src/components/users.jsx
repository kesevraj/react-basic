import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
function Users ()  {
   
    const [userList ,setUserList] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts').then(resp=>{
         
         setUserList(resp.data)
         setIsLoaded(true)
      }).catch(err=>{
        setIsLoaded(true)
        setError(err)
          console.log(err)
      })
    })
    if(error){
        return (<p>{error}</p>)
       
    } else if(!isLoaded){
        return (<p>loading</p>)
    }else{

    
        return (
            <div className="container">
            <div className="row align-items-start">
              <div className="col">
            <ul> list of users 
           { userList.map(user=> <li key={user.id}><Link to={'userDetail/'+user.id}>{user.id}</Link> </li>) }
            </ul>
            </div>

            <div className='col'>
            <h6>
              user details
            </h6>
            <Outlet/>
            </div>
            </div>
              
        </div>);
    }
}
 
export default Users;