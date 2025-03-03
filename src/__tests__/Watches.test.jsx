import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Watches from '../components/Watches';

describe('Watches component', () => {
    // const mockTimeService = jest.fn(() => [
    //     {
    //         name: 'Test Watch',
    //         startTime: 1,
    //         endTime: 2
    //     }
    // ]);

    test('renders correctly', () => {
        render(<Watches />);
    });

    test('displays all watches', () => {
        // This should really mock the watches that are returned and just expect the mocked values
        render(<Watches />);
        expect(screen.getByText(/First Watch/)).toBeInTheDocument();
        expect(screen.getByText(/Middle Watch/)).toBeInTheDocument();
        expect(screen.getByText(/Morning Watch/)).toBeInTheDocument();
        expect(screen.getByText(/Forenoon Watch/)).toBeInTheDocument();
        expect(screen.getByText(/Afternoon Watch/)).toBeInTheDocument();
        expect(screen.getByText(/First Dog Watch/)).toBeInTheDocument();
        expect(screen.getByText(/Second Dog Watch/)).toBeInTheDocument();
    });

    test('highlights the current watch', () => {
        // This should mock the returned watches and expect a known watch to have the currentWatch class set
        render(<Watches />);
        // expect(screen.getByText(/First Watch/)).toHaveClass('currentWatch');
    });
});
