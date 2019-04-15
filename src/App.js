import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/chat'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actions:'ws://localhost:8086/post/v2/notification/memberID/5cb356f10b0000560028135b/count',
      message:'4'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>{this.state.message} </p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <Chat />
          </p>
          
          
        </header>
      </div>
    );
  }
}

export default App;
