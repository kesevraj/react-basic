import React from 'react';
import { Component } from 'react';
import Counters from './counters';
import Total from './total';


class Home  extends Component {
  state = { 
    counters : [
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:4},
        {id:4,value:0},
    ]
 } 

 handleReset=()=>{
  let counters =[...this.state.counters]
  counters.map(a=>a.value=0)
  this.setState({counters:counters})
 }

 handleIncrement=(counter)=>{
     let counters =[...this.state.counters]
     let index = counters.indexOf(counter)
     counters[index].value=counter.value+1
     let incrementedValue =counters.filter((a) => {
        if(a.id ===counter.id){
            return counter.value+1
        } 
        })
        console.log(incrementedValue)
     this.setState({counters:counters})
       
 }
 handledelete=(counter)=>{
    let counters =[...this.state.counters]
    // let filteredCounters =counters.filter(a =>a.id !==counter.id)
    // let filteredCounters = counters.splice(counters.indexOf(counter),1)
    counters.splice(counters.findIndex(a=>a.id===counter.id),1)
    this.setState({counters:counters})
 }
  render(){
    return(
      <React.Fragment>
       <Total counters={this.state.counters}/>
       <Counters counters={this.state.counters} doHandle={this.handleIncrement} doReset={this.handleReset} doDelete={this.handledelete}/>
      </React.Fragment>
    
    )
  }

}

export default Home