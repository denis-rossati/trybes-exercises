import React from 'react';

class Input extends React.Component {

  render() {
    const { name, type, func } = this.props;
    return(
      <input
      type={type}
      name={name}
      onChange={func}
    />
    )
  }
}

export default Input