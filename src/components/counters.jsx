import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   
    render() { 
        return (
            <div>
                <button className='m-2 btn btn-primary' onClick={this.props.doReset}>reset</button>
                {this.props.counters.map(counter =>
              <Counter counter={counter} doHandle={this.props.doHandle}  doDelete={this.props.doDelete} key={counter.id}/>
              )}  
            </div>
        );
    }
}
 
export default Counters;