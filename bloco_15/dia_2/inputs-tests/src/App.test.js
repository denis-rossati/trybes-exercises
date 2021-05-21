import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  const inputName = getByTestId('input-nome');
  const inputEmail = getByTestId('input-email');

  expect(inputName).toBeInTheDocument();
  expect(inputEmail).toBeInTheDocument();

  fireEvent.change(inputEmail, { target: { value: 'meuEmail' } });
  expect(inputEmail).toHaveValue('meuEmail');

  fireEvent.change(inputName, { target: { value: 'meuNome' } });
  expect(inputName).toBeInTheDocument('meuNome');

});
