import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import LineChart from './LineChart';

test('renders', () => {
  render(<LineChart serie={{}} />, {wrapper: BrowserRouter});

  let chart = screen.getByTestId("chart");
  expect(chart).toBeInTheDocument();
});
