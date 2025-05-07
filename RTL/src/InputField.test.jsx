import { fireEvent, render, screen } from '@testing-library/react';
import InputFiled from './InputFiled';
import { expect } from 'vitest';

test('testing input field by placeholder', () => {
  render(<InputFiled />);
  const inputElement = screen.getByPlaceholderText(/enter name/i);
  expect(inputElement).toBeInTheDocument();
});

test('testing inputfield by label text', () => {
  render(<InputFiled />);
  const inputElement = screen.getByLabelText(/name:/i);
  expect(inputElement).toBeInTheDocument();
});

test('testing input field by fireEvent', () => {
  render(<InputFiled />);
  const inputElement = screen.getByRole('textbox', { name: /name/i });
  fireEvent.change(inputElement, { target: { value: 'upendra' } });
  expect(inputElement.value).toBe('upendra');
});

test('typed text of input field', () => {
  render(<InputFiled />);
  const inputElement = screen.getByPlaceholderText(/Enter Name/i);
  fireEvent.change(inputElement, { target: { value: 'Upendra' } });
  const typedText = screen.getByText('Typed Name: Upendra');
  expect(typedText).toBeInTheDocument();
});
