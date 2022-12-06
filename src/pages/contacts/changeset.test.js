import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import Changeset from './changeset';

test('renders', () => {
  let versions = [{
    "id": 5,
    "created_at": "about 5 hours",
    "changeset": {"first_name": ["Lucius","Lucius1"]}
  }]
  render(<Changeset versions={versions} />, {wrapper: BrowserRouter});

  let items = screen.getByRole("listitem");
  expect(items).toBeInTheDocument();
});
