import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';


describe('tic tac toe tests', () => {
  test('renders empty squares', () => {
    const { getAllByTestId } = render(<App />);
    expect(getAllByTestId('emptySquare')).toBeTruthy()
  });
  test('renders a welcome message', () => {
    const { getByText } = render(<h1>Jogo da Velha!</h1>);
    expect(getByText).toBeTruthy();
  });
  test('mark a square', () => {
    const { getAllByTestId } = render(<App />);
    const testeClick = fireEvent.click(getAllByTestId('emptySquare'))
    expect(testeClick).toHaveBeenCalledTimes(1);
  })
}
)