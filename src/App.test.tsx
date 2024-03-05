import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders intro text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Autocomplete Component/i);
  expect(linkElement).toBeInTheDocument();
});
