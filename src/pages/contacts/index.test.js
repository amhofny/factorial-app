import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import ContactsIndex from './index';

test('renders', () => {
  render(<ContactsIndex />, {wrapper: BrowserRouter});

  let table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});
