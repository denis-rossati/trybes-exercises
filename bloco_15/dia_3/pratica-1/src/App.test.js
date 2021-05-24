import React from 'react';
import App from './App';
import renderWithRouter from './renderWithRouter';
import { fireEvent } from '@testing-library/react';


describe('testa toda a aplicação', () => {
  test('renders learn react link', () => {
    const { getByRole } = renderWithRouter(<App />);
    const phrase = getByRole('heading', {
      level: 1,
      name: 'Você está na página Início',
    });
    expect(phrase).toBeInTheDocument();
    expect(phrase.textContent).toBe('Você está na página Início');
  });
  
  test('Renderiza o "about"', () => {
    const { getByRole, history } = renderWithRouter(<App />)
  
    const btn = getByRole('link', {
      name: 'Sobre',
    });
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
  
    // recuperamos o nome da URL atual usando history que foi desestruturado anteriomente.
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
  
    const phrase = getByRole('heading', {
      level: 1,
    });
    expect(phrase).toBeInTheDocument();
    expect(phrase.textContent).toBe('Você está na página Sobre');
  })
  
  test('Verifica paginas não encontradas', () => {
    const { getByRole, history } = renderWithRouter(<App />);
    history.push('/namelessPage');
    const pathname = history.location.pathname;
    expect(pathname).toBe('/namelessPage');
  
    const message = getByRole('heading', {
      level: 1,
    });
    
  
    expect(message).toBeInTheDocument();
    expect(message.textContent).toBe('Página não encontrada');
  });
})
