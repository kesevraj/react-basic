import React, { Component } from 'react';
class Counter extends Component {
    state = {  } 
    // constructor(props){
    //     super(props)
     
    // }
    handleBadge=()=>{
        console.log(this.props.counter.value)
        return  this.props.counter.value === 0 ? 'Zero':this.props.counter.value 
     }
      classValue=()=>{
         return  this.props.counter.value === 0 ? 'bg-warning' : 'bg-success'
     }
    render() { 
        const counter = this.props.counter
    //   this.handleBadge = this.handleBadge(counter)
    //    this.classValue =this.classValue(counter)
        return (
            <div>
               <span className={'m-2 badge '+this.classValue()}>{this.handleBadge()} </span>
               <button className='btn btn-primary m-2' onClick={()=>this.props.doHandle(counter)}>increment</button>
               <button className='btn btn-danger m-2' onClick={()=>this.props.doDelete(counter)}>delete</button>
            </div>
        );
       
    }
}
 
export default Counter;