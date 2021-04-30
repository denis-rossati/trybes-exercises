import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.state = {
      estadoFavorito: '',
      idade: 0,
      check: false,
      select: 1,
    };
  }

  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  handleAgeChange(event) {
    this.setState({
      idade: event.target.value
    });
  }

  handleCheckChange() {
    if(this.state.check === false) {
      this.setState({
        check: true,
      })
    } else {
      this.setState({
        check: false,
      })
    }
  }

  handleSelectChange(event) {
    this.setState({
      select: Number(event.target.value),
    })
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <input
            type="number"
            name="idade"
            value={this.state.idade}
            onChange={this.handleAgeChange}
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            value={this.state.check}
            onChange={this.handleCheckChange}
          />

          <select
          className='select'
          onChange={this.handleSelectChange}
          >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Form;