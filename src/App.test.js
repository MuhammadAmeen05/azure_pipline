// src/App.test.js
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders app', () => {
  act(() => {
    render(<App />);
  });
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});