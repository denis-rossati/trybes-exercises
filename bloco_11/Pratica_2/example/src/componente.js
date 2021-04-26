import React, { Component } from 'react';


class Comp extends Component {
  render() { 
    return <h1>Hello, world!!</h1>
  };
};

class Comp2 extends Component {
  render() {
    return React.createElement('div', null, React.createElement(Comp));
  }
};

export default Comp2;
