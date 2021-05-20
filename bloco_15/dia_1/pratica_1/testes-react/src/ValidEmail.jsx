import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const validEmail = () => {
  let styles = {
    color: 'green'
  };
  return(<h3 data-testid="validation-email" style={styles}>
  Email Valido
  </h3>)
}

const invalidEmail = (email) => {
  if(email === '') {
    return(<h3 data-testid="validation-email">
    Campo Não Preenchido
    </h3>)
  }
  return(<h3 data-testid="validation-email">
    Email Inválido
    </h3>)
}

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {(verifyEmail(email) ? validEmail() : invalidEmail(email) )}
    </div>
  );
};

export default ValidEmail;