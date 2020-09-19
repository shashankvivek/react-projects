import React, { Component } from 'react';
import logo from './logo.svg';
import Counters from './components/counters';
import './App.css';
import Navbar from './components/navbar';
import MyForm from './components/myForm';
import { BrowserRouter, Route } from 'react-router-dom'
import ContactUs from './components/contactus'

class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar></Navbar>
          <main className="container">
            <Route exact path ="/" component={Counters} />
            <Route path ="/contact" component={ContactUs} />
            <hr />
            <MyForm />
          </main>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
