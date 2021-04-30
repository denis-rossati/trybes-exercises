import React from 'react'
import './App.css';
import GenericInput from './componentes/GenericInput';
import NameInput from './componentes/NameInput';

class App extends React.Component {
  constructor(props){
    super(props)
    this.handleGenericInput = this.handleGenericInput.bind(this);
    this.chewUpperCaseGenericInput = this.chewUpperCaseGenericInput.bind(this);
    this.chewSpecialCharactersGenericInput = this.chewSpecialCharactersGenericInput.bind(this);
    this.chewFirstLetterGenericInput = this.chewFirstLetterGenericInput.bind(this);
    this.state = {
      name:'',
      email:'',
      cpf:'',
      endereco:'',
      cidade:'',
      estado:'',
      tipo:'',
    }
  }

  handleGenericInput({ target }) {
    const { type, name } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,       
    }));
  }

  checkFirstCharacter({ target }) {
    if(!isNaN(target.value[0])) {
      target.value = '';
    }
  }

  toUpperCase({ target }) {
    target.value = target.value.toUpperCase();
  }

  removeSpecialCharacters({ target }) {
    target.value = target.value.replace(/[&\/\\#,+();^´`$~%.'":*!?<>{}]/g, '');
  }

  chewSpecialCharactersGenericInput(event) {
    this.removeSpecialCharacters(event);
    this.handleGenericInput(event);
  }

  chewUpperCaseGenericInput(event) {
    this.toUpperCase(event);
    this.handleGenericInput(event);
  }

  chewFirstLetterGenericInput(event) {
    this.checkFirstCharacter(event);
    this.handleGenericInput(event)
  }
  render() {
    return (
      <form>
        <fieldset>
          <NameInput name='name' title='Nome:' maxLength='40' type='text' func={this.chewUpperCaseGenericInput} />
          <GenericInput name='email' title='E-mail:' maxLength='50' type='text' func={this.handleGenericInput} />
          <GenericInput name='cpf' title='CPF:' maxLength='11' type='text' func={this.handleGenericInput} />
          <GenericInput name='endereco' title='Endereço:' maxLength='200' type='text' func= { this.chewSpecialCharactersGenericInput } />
          <GenericInput name='cidade' title='Cidade:' maxLength='28' type='text' func={ this.chewFirstLetterGenericInput } />
        </fieldset>
      </form>
    );
  }
}

export default App;
