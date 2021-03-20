import { render, screen } from '@testing-library/react';
import App from './App';

test('render App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Clothing/i);
  expect(linkElement).toBeInTheDocument();
});
