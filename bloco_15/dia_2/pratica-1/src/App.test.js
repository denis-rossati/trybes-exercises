import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());
test('renders learn react link', async () => {
  const joke = {
    joke: 'piada',
  };
  jest.spyOn(global, 'fetch');
  global.fetch = jest.fn(async () => ({
    json: async () => joke,
  }))

  const API_URL = 'https://icanhazdadjoke.com/';
  const { findByText } = render(<App />);
  await findByText('piada');
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toBeCalledWith(API_URL, { headers: { Accept: 'application/json' } })
});
