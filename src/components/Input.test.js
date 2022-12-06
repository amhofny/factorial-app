import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import Input from './Input';

test('renders', () => {
  let formik = { errors: {}};
  formik.getFieldProps = jest.fn();

  render(<Input name="test" type="test" formik={formik} />, {wrapper: BrowserRouter});

  const input = screen.getByTestId("test");
  expect(input).toBeInTheDocument();
});
