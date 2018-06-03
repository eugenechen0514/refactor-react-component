import React, { Component } from 'react';
import './App.css';
import LoginBoxContainer, {withValidation} from './LoginBoxContainer';

const validation = (value) => {
    return String(value).length > 1
};

const MyLoginBoxContainer = withValidation(validation)(LoginBoxContainer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyLoginBoxContainer onClickButton={console.log} usernameLabel={'名稱'} passwordLabel={'密碼'} />
      </div>
    );
  }
}

export default App;
