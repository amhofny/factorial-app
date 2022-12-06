import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import ContactForm from './form';

test('renders', () => {
  render(<ContactForm />, {wrapper: BrowserRouter});

  let input = screen.getByTestId("email");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", "email");

  input = screen.getByTestId("first_name");
  expect(input).toBeInTheDocument();

  input = screen.getByTestId("last_name");
  expect(input).toBeInTheDocument();

  input = screen.getByTestId("phone_number");
  expect(input).toBeInTheDocument();

  let button = screen.getByTestId("submit");
  expect(button).toBeInTheDocument();
});
