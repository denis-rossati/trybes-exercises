import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import ValidEmail from './ValidEmail';

// Adicione esse teste.
describe('Testa se a funcionalidade de adicionar email funciona corretamente', () => {
  it('Verificando se o botão, o campo email e a validação estão funcionando.', () => {
    const { getByTestId, getByLabelText } = render(<App />);

    const EMAIL_USER = 'email@email.com';

    const textEmail = getByTestId('id-email-user');
    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    const validationRegex = getByTestId('validation-email');

    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');

    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
    fireEvent.click(btnSend);
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
    expect(validationRegex.textContent).toBe('Email Valido');
  });

  it('Testando um componente, caso o email seja valido.', () => {
    const EMAIL_USER = 'email@email.com';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isValid = getByText('Email Valido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testando um componente, caso o email seja invalido.', () => {
    const EMAIL_USER = 'invalid';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isValid = getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testando um component, caso o email esteja vazio', () => {
    const EMAIL_USER = '';
    const { getByTestId } = render(<ValidEmail email={EMAIL_USER}/>);
    const valueResult = getByTestId('id-email-user');
    const warningMessage  = getByTestId('validation-email');

    expect(valueResult).toBeInTheDocument();
    expect(valueResult).toHaveTextContent('Valor:');
    expect(warningMessage).toBeInTheDocument();
    expect(warningMessage.textContent).toBe('Campo Não Preenchido');
  });
});

