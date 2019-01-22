import React, { Component } from 'react';
import './App.css';
import Content from './Content';

class App extends Component {
  constructor(props) {
    console.log('Component constructor!');
    super(props);

    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  };
  setNewNumber() {
    console.log('Update data!');
    this.setState({ data: this.state.data + 1 })
  }
  render() {
    console.log('Component render!');
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data}></Content>
      </div>
    );
  }
}

export default App;
