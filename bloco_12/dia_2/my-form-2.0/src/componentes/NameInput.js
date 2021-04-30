import React from 'react';

class NameInput extends React.Component {
  render() {
    const { 
      type,
      maxLength,
      title,
      func,
      name
    } = this.props;
    return(
      <label>
        <p>{ title }</p>
        <input
        name={name}
        type={ type }
        maxLength={ maxLength }
        onChange={ func }
        required
        />
      </label>
    )
  }
}

export default NameInput;