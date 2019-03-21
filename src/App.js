import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: 'red'
    };
    this.onClickColorButton = this.onClickColorButton.bind(this);
  }

  renderHellowWord() {
    const { color } = this.state;

    return (
      <div>halo, {color}</div>
    )
  }

  onClickColorButton(e) {
    this.setState({ color: 'blue' })
  }

  render() {
    return (
      <div>
        {this.renderHellowWord()}
        <button onClick={this.onClickColorButton}>Submit</button>
      </div>
    );
  }
}

export default App;
