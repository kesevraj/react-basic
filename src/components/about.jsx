import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
function About(){

        const navigate = useNavigate();
        return (
            <div>
                <h4>Outline</h4>
                <p> this a  basic counter website build with react, react-router, httprequest and array list by kesevraj</p>
               <button onClick={() => navigate(-1)}>back</button>
            </div>
        );
   
}
 
export default About ;