// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DaoQuartz title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DaoQuartz/i);
    expect(titleElement).toBeInTheDocument();
});
