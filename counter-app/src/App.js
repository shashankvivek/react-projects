import React, { Component } from 'react';
import logo from './logo.svg';
import Counters from './components/counters';
import './App.css';
import Navbar from './components/navbar';

class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <main className="container">
          <Counters></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
