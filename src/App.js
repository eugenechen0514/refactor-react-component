import React, { Component } from 'react';
import './App.css';
import LoginBox from './LoginBoxContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginBox onClickButton={console.log} usernameLabel={'名稱'} passwordLabel={'密碼'} />
      </div>
    );
  }
}

export default App;
