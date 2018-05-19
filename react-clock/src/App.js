import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  dateObject = new Date();

  state = {
    date: this.dateObject.toLocaleTimeString(),
    pageLoadedAt: this.dateObject.toLocaleTimeString()
  };

  updateClock() {

    this.setState({ date: (new Date()).toLocaleTimeString() })
  }

  componentDidMount() {

    setInterval(() => {
      this.updateClock()
    }, 1000);
   
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { /* Since we do not need this. We will be putting our own code  */}
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <p className="App-intro"> Page loaded at: {this.state.pageLoadedAt}</p>
        <p className="App-intro"> {this.state.date}</p>
      </div>
    );
  }
}

export default App;
