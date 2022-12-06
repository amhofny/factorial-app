import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import Header from './Header';

test('renders', () => {
  render(<Header />, {wrapper: BrowserRouter});

  const contactsLink = screen.getByText(/contacts/i);
  expect(contactsLink).toBeInTheDocument();

  const metricsLink = screen.getByText(/metrics/i);
  expect(metricsLink).toBeInTheDocument();
});
