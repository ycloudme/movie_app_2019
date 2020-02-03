import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component {
  constructor() {
    super();
    console.log("constructor");
  }
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };

  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }

  componentDidMount() {
    console.log("component rendered");
  }

  render() {
    console.log("rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("goodbye component");
  }
}

export default App;
