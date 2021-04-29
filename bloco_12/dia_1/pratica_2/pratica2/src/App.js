import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.color = this.color.bind(this);
    this.state = {
      colorId: 0,
    }
  }
  
  color() {
    this.setState((prevState) => ({
      colorId: prevState.colorId + 1,
    }))
    if(this.state.colorId % 2 === 0) {
      document.querySelector('button').style.backgroundColor = 'green';
      console.log(document.querySelector('button').style.backgroundColor);
    } else {
      document.querySelector('button').style.backgroundColor = 'inherit';
      console.log(document.querySelector('button').style.backgroundColor);
    }
  }

  render() {
    return (
      <div>
      <button onClick={ () => this.color() }>Mudar cor</button>  
      </div>
    );
  }
}

export default App;
