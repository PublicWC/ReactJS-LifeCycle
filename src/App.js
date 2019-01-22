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
  };
  
  render() {
    console.log('Component render!');
    // this works, but have to know more about it
    const setNewNumber = () => {
      console.log('Update data!');
      this.setState({ data: this.state.data + 1 })
    };
    
    return (
      <div>
        <button onClick={setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data}></Content>
      </div>
    );
  }
}

export default App;
