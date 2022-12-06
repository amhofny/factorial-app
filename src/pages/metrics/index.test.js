import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import MetricsIndex from './index';

test('renders', () => {
  render(<MetricsIndex />, {wrapper: BrowserRouter});

  let table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});
