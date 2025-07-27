import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders the form fields and submit button', () => {
  render(<App />);

  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/sports/i)).toBeInTheDocument(); // example checkbox
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});
