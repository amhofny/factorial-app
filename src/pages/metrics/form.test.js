import { render, screen } from '@testing-library/react';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import MetricForm from './form';

test('renders', () => {
  render(<MetricForm />, {wrapper: BrowserRouter});

  let input = screen.getByTestId("name");
  expect(input).toBeInTheDocument();

  input = screen.getByTestId("value");
  expect(input).toBeInTheDocument();

  let button = screen.getByTestId("submit");
  expect(button).toBeInTheDocument();
});
