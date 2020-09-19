import React, { Component } from 'react';

class MyForm extends Component {
  state = {
    name: '',
  };

  onInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.name);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.onInputChange} />
          <button>Submit</button>
          <br></br>
          Your input: {this.state.name}
        </form>
      </div>
    );
  }
}

export default MyForm;
