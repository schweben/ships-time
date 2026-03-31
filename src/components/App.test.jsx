import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders correctly', () => {
    render(<App />);
  });

  test('contains a title', () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Ship's Time");
  });

  test('renders the CurrentWatch component', () => {
    render(<App />);
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThanOrEqual(1);
  });

  test('renders the Watches component', () => {
    render(<App />);
    expect(screen.getByRole('columnheader', { name: 'Watch' })).toBeDefined();
    expect(screen.getByRole('columnheader', { name: 'Times' })).toBeDefined();
  });
});
