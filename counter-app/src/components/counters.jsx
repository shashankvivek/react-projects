import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters: counters });
  };

  handlerIncrement= (counter)=>{
    const index = this.state.counters.findIndex(c => c.id === counter.id)
    this.state.counters[index].value++;
    this.setState({counters: this.state.counters})
  }

  resetCounter= () => {
    this.state.counters.forEach(c => c.value = 0)
    this.setState({counters: this.state.counters})
  }

  render() {
    return (
      <div>
          <button className="btn btn-primary m-2" onClick={this.resetCounter}>Reset</button>
        {this.state.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onIncrement={this.handlerIncrement}
            onDelete={this.handleDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
