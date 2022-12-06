import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import LineChart from './LineChart';

test('renders', () => {
  jest.spyOn(document.body, "clientWidth", "get").mockReturnValue(1000);
  jest.spyOn(document.body, "clientHeight", "get").mockReturnValue(1000);

  render(<LineChart serie={{}} />, {wrapper: BrowserRouter});

  let chart = screen.getByTestId("chart");
  expect(chart).toBeInTheDocument();
});
