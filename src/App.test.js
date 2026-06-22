// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DappDrift title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DappDrift/i);
    expect(titleElement).toBeInTheDocument();
});
