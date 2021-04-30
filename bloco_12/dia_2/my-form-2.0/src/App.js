import React from 'react'
import './App.css';
import GenericInput from './componentes/GenericInput';

class App extends React.Component {
  constructor(props){
    super(props)
    this.handleGenericInput = this.handleGenericInput.bind(this);
    this.state = {
      name:'',
    }
  }

  handleGenericInput({ target }) {
    const { type, name } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,       
    }));
    console.log(target.name)
  }

  render() {
    return (
      <fieldset>
        <GenericInput name='name' title='Nome:' maxLength='40' type='text' func={this.handleGenericInput}/>
      </fieldset>
    );
  }
}

export default App;
