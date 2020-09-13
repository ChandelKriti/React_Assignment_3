import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Component is defined or not', () => {
    expect(<App />).toBeDefined();
});


test('Heading present or not', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Employee Details/i);
  expect(linkElement).toBeInTheDocument();
});
