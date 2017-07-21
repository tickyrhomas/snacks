import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor:'gray'}}>
        <p className="App-intro">
          <img className="App-logo" src='andrew_snack.png'/>
          Coming Soon!
          <img className="App-logo" src='ricky_snack.png'/>
        </p>
      </div>
    );
  }
}

export default App;
