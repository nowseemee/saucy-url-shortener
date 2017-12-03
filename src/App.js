import React, { Component } from 'react';
import Input from './Input'
import Button from './Button'
import Feedback from './Feedback'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    status: ''
  };

  handleClick = () => {
    if (!this.input.value) {
      return this.setState({ hasError: true });
    }
    return fetch('/create', {
      method: 'post',
      body: JSON.stringify({ original: this.input.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => this.setState({ data }))
    .catch(() => this.setState({ hasError: true }))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Feedback {...this.state} />
        <Input inputRef={(ref) => { this.input = ref } } />
        <Button onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
