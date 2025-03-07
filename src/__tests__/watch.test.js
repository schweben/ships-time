import { describe, expect, test } from 'vitest';
import { Watch } from '../domain/watch';

describe('Watch should correctly determine if a given time is within its range', () => {
    const watch = new Watch('Test', 1, 2);

    test('isTimeInWatch returns true for a time within its range', () => {
        expect(watch.isTimeInWatch(new Date(2025, 1, 31, 1, 30, 0, 0))).toBe(true);
    });

    test('isTimeInWatch returns false for a time earlier than its range', () => {
        expect(watch.isTimeInWatch(new Date(2025, 1, 31, 0, 30, 0, 0))).toBe(false);
    });

    test('isTimeInWatch returns false for a time later than its range', () => {
        expect(watch.isTimeInWatch(new Date(2025, 1, 31, 2, 30, 0, 0))).toBe(false);
    });
});

describe('Watch should return the correct number of bells for a given time', () => {
    const watch = new Watch('Test', 16, 18);
    test('getBells returns 1 bells', () => {
        expect(watch.getBells(new Date(2025, 1, 31, 16, 30, 0, 0))).toBe(1);
    });

    test('getBells returns 2 bells', () => {
        expect(watch.getBells(new Date(2025, 1, 31, 17, 0, 0, 0))).toBe(2);
    });

    test('getBells returns 3 bells', () => {
        expect(watch.getBells(new Date(2025, 1, 31, 17, 30, 0, 0))).toBe(3);
    });

    test('getBells returns 4 bells', () => {
        expect(watch.getBells(new Date(2025, 1, 31, 18, 0, 0, 0))).toBe(4);
    });

    test('getBells throws an error if the bells is 0', () => {
        expect(() => watch.getBells(new Date(2025, 1, 31, 16, 0, 0, 0))).toThrow('Bells cannot be 0');
    });

    test('getBells throws an error if the time is outside the range', () => {
        expect(() => watch.getBells(new Date(2025, 1, 31, 20, 0, 0, 0))).toThrow('Time is not in watch');
    });
});

describe('Watch should return the maximum number of bells that can be rung in it', () => {
    test('getMaxBells returns 4 bells for a dog watch', () => {
        const watch = new Watch('Test', 16, 18);
        expect(watch.getMaxBells()).toBe(4);
    });

    test('getMaxBells returns 4 bells for a normal watch', () => {
        const watch = new Watch('Test', 0, 4);
        expect(watch.getMaxBells()).toBe(8);
    });
});
