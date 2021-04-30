import React, { Component } from 'react';
import './Form.css';
import Input from './input';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      estadoFavorito: '',
      idade: 0,
      check: false,
      select: 1,
    };
  }

  handleChange({target}) {
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <fieldset>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
          <Input type='text' name='estadoFavorito' func={this.handleChange}/>
          </label>
          <input
            type="checkbox"
            name="check"
            className='checkbox'
            onChange={this.handleChange}
          />

          <select
          name='select'
          className='select'
          onChange={this.handleChange}
          >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          </select>
          <input
          name='file'
          type='file'
          />
        </form>
        </fieldset>
      </div>
    );
  }
}

export default Form;