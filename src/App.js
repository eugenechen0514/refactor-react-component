import React, { Component } from 'react';
import './App.css';
import LoginBox from './LoginBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginBox onClickButton={console.log} />
      </div>
    );
  }
}

export default App;
