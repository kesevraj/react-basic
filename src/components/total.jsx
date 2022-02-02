import React, { Component } from 'react';

class Total extends Component {
    state = {  } 
   
    render() { 
        let value = 0
        console.log(this.props.counters,"fefga")
    this.props.counters.map(a=>{
           return  value = value+ a.value
        })
            
        return (
            <div>
                <h4 className='m-2'>Total counters displayed {this.props.counters.length}</h4>
                <h4 className='m-2 '>sum of counters{value}</h4>
            </div>
        );
    }
}
 
export default Total;