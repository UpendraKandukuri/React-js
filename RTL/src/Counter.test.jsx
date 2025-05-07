import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Counter from './Counter';

test('Initial button text', () => {
  render(<Counter />);
  const elemnet = screen.getByText('Count: 0');
  expect(elemnet).toBeInTheDocument();
});

test('testing button by role', () => {
  render(<Counter />);
  const buttonElement = screen.getByRole('button', { name: /increment/i });
  expect(buttonElement).toBeInTheDocument();
});

test('increment count by clicking button', () => {
  render(<Counter />);
  const buttonElement = screen.getByRole('button', { name: /increment/i });
  fireEvent.click(buttonElement);
  const buttonElementText = screen.getByText(/count: 1/i);
  expect(buttonElementText).toBeInTheDocument();
});
