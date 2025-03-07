import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import CurrentWatch from './CurrentWatch';
import Watches from './Watches';

describe('App component', () => {

  // jest.mock('../components/CurrentWatch');
  // jest.mock('../components/Watches');

  test('renders correctly', () => {
    render(<App />);
  });

  test('contains a title', () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Ship's Time");
  });

  test.todo('calls the CurrentWatch component', () => {
    render(<App />);
    // expect(CurrentWatch.mock.calls).toHaveLength(1);
    // expect(CurrentWatch).toHaveBeenCalled();
  });

  test.todo('calls the Watches component', () => {
    const watches = vi.mock('../Components/Watches', () => ({
      default: () => <div>A watch</div>
    }));
    render(<App />);
    expect(watches).toHaveBeenCalled();
    // expect(Watches.mock.calls).toHaveLength(1);
  })
});
