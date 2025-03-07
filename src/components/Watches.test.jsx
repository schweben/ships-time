import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Watches from './Watches';
import { Watch } from '../domain/watch';

describe('Watches component', () => {
    const mockWatches = vi.mock('../service/timeService', () => {
        return {
            getWatches: vi.fn(() => [new Watch('Test Watch', 0, 24)]),
            getCurrentWatch: vi.fn(() => new Watch('Test Watch', 0, 24))
        }
    });

    test('renders correctly', () => {
        render(<Watches />);
    });

    test('displays all watches', () => {
        render(<Watches />);
        expect(screen.getByText(/Test Watch/).textContent).toBe('Test Watch');
    });

    test.todo('highlights the current watch', () => {
        render(<Watches />);
        expect(screen.getByText(/First Watch/)).toHaveClass('currentWatch');
    });
});
