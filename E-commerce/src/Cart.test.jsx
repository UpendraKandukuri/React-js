import { expect } from 'vitest';
import Cart from './Cart';
import { customRender } from './test-utils';
import { screen } from '@testing-library/react';

test('testing no items in the cart', () => {
  customRender(<Cart />);
  const h2Element = screen.getByText(/no items/i);
  expect(h2Element).toBeInTheDocument();
});

// test('testing + button', async () => {
//   customRender(<Cart />);
//   const buttonElement = await screen.findByAltText('+');
//   expect(buttonElement).toBeInTheDocument();
// });
