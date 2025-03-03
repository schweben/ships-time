// import { describe, expect, test } from 'vitest';
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

    test.todo('displays all watches', () => {
        // This should really mock the watches that are returned and just expect the mocked values
        render(<Watches />);
        expect(screen.getByText(/First Watch/).textContent).toBe("First Watch");
        expect(screen.getByText(/Middle Watch/).textContent).toBe("Middle Watch");
        expect(screen.getByText(/Morning Watch/).textContent).toBe("Morning Watch");
        expect(screen.getByText(/Forenoon Watch/).textContent).toBe("Forenoon Watch");
        expect(screen.getByText(/Afternoon Watch/).textContent).toBe("Afternoon Watch");
        expect(screen.getByText(/First Dog Watch/).textContent).toBe("First Dog Watch");
        expect(screen.getByText(/Second Dog Watch/).textContent).toBe("Second Dog Watch");
    });

    test.todo('highlights the current watch', () => {
        // This should mock the returned watches and expect a known watch to have the currentWatch class set
        render(<Watches />);
        // expect(screen.getByText(/First Watch/)).toHaveClass('currentWatch');
    });
});
