import { render, screen } from '@testing-library/react';
import ProductsPage from './ProductsPage';
import { expect, test } from 'vitest';
import { customRender } from './test-utils';

test('testing h1 element text', () => {
  customRender(<ProductsPage />);
  const h1Element = screen.getByText(/Products page/i);
  expect(h1Element).toBeInTheDocument();
});

test('testing loading before fetch', () => {
  customRender(<ProductsPage />);
  const headingElement = screen.getByRole('heading', { name: 'Loading...' });
  expect(headingElement).toBeInTheDocument();
});
