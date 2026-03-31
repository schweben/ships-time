import { describe, expect, test, vi } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import Watches from './Watches';
import { Watch } from '../domain/watch';
import styles from '../styles/watches.module.css';

vi.mock('../service/timeService', () => {
    return {
        getWatches: vi.fn(() => [new Watch('Test Watch', 0, 24)]),
        getCurrentWatch: vi.fn(() => new Watch('Test Watch', 0, 24))
    }
});

describe('Watches component', () => {
    test('renders correctly', () => {
        render(<Watches />);
    });

    test('displays all watches', () => {
        render(<Watches />);
        expect(screen.getByText(/Test Watch/).textContent).toBe('Test Watch');
    });

    test('highlights the current watch', async () => {
        vi.useFakeTimers();
        render(<Watches />);

        await act(async () => {
            await vi.advanceTimersByTimeAsync(1000);
        });

        const currentWatchRow = screen.getByText('Test Watch').closest('tr');
        expect(currentWatchRow?.className).toContain(styles.currentWatch);
        vi.useRealTimers();
    });
});
