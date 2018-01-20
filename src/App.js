import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import fonts from "./Apple ][.ttf";


// import './assets/fonts/Apple][.ttf';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">P00RGRRRL</h1>
        </header>
        <p className="App-intro">
          REL0AD
        </p>
        <div id="root"></div>
      </div>
    );
  }
}

export default App;
