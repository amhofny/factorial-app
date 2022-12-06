import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import TimeSeries from './TimeSeries';

test('renders', () => {
  render(<TimeSeries  serie={[]} />, {wrapper: BrowserRouter});

  let chart = screen.getByTestId("chart");
  expect(chart).toBeInTheDocument();
});
