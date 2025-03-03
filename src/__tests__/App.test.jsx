import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import CurrentWatch from '../components/CurrentWatch';
import Watches from '../components/Watches';

describe('App component', () => {

  // jest.mock('../components/CurrentWatch');
  // jest.mock('../components/Watches');

  test('renders correctly', () => {
    render(<App />);
  });

  test('contains a title', () => {
    render(<App />);
    expect(screen.getByText("Ship's Time")).toBeInTheDocument();
  });

  test('calls the CurrentWatch component', () => {
    render(<App />);
    // expect(CurrentWatch.mock.calls).toHaveLength(1);
    expect(CurrentWatch).toHaveBeenCalled();
  });

  test('calls the Watches component', () => {
    render(<App />);
    // expect(Watches.mock.calls).toHaveLength(1);
  })
});
