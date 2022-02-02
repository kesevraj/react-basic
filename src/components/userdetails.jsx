import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

// Get ID from URL

    
 function UserDetails () {
    const [user ,setUser] = useState({ })
     const params = useParams()
   useEffect(()=>{
 axios.get('https://jsonplaceholder.typicode.com/posts/'+params.id).then(resp=>{
            console.log(resp.data)
            setUser(resp.data)
           
        }).catch(err=>{
        
         
            console.log(err)
        })
 
   },[params.id])
       
 
        return (
            <div>
                hiiii
            <p>{user.title}</p>
            <p>{user.body}</p>
            </div>
           
        );
    
}
 
export default UserDetails;

