import { describe, expect, test } from 'vitest';
import { getBells, getCurrentWatch, getShipsTime, getWatches } from "./timeService";

describe('Test that watches are defined correctly', () => {

    test('Correct number of watches', () => {
        expect(getWatches().length).toBe(7);
    });

    test('First watch between 20:00 and 00:00', () => {
        const result = getWatches().find((watch) => watch.name === 'First Watch');
        expect(result.name).toBe('First Watch');
        expect(result.startHour).toBe(20);
        expect(result.endHour).toBe(0);
    });

    test('Middle watch between 00:00 and 04:00', () => {
        const result = getWatches().find((watch) => watch.name === 'Middle Watch');
        expect(result.name).toBe('Middle Watch');
        expect(result.startHour).toBe(0);
        expect(result.endHour).toBe(4);
    });

    test('Morning watch between 04:00 and 08:00', () => {
        const result = getWatches().find((watch) => watch.name === 'Morning Watch');
        expect(result.name).toBe('Morning Watch');
        expect(result.startHour).toBe(4);
        expect(result.endHour).toBe(8);
    });

    test('Forenoon watch between 08:00 and 12:00', () => {
        const result = getWatches().find((watch) => watch.name === 'Forenoon Watch');
        expect(result.name).toBe('Forenoon Watch');
        expect(result.startHour).toBe(8);
        expect(result.endHour).toBe(12);
    });

    test('Afternoon watch between 12:00 and 16:00', () => {
        const result = getWatches().find((watch) => watch.name === 'Afternoon Watch');
        expect(result.name).toBe('Afternoon Watch');
        expect(result.startHour).toBe(12);
        expect(result.endHour).toBe(16);
    });

    test('First Dog watch between 16:00 and 18:00', () => {
        const result = getWatches().find((watch) => watch.name === 'First Dog Watch');
        expect(result.name).toBe('First Dog Watch');
        expect(result.startHour).toBe(16);
        expect(result.endHour).toBe(18);
    });

    test('Second Dog watch between 18:00 and 20:00', () => {
        const result = getWatches().find((watch) => watch.name === 'Second Dog Watch');
        expect(result.name).toBe('Second Dog Watch');
        expect(result.startHour).toBe(18);
        expect(result.endHour).toBe(20);
    });
});

describe('Correct watch is returned for a given time', () => {

    describe('Current watch should be returned after the watch start time', () => {
        test('getCurrentWatch returns First watch after start time', () => {
            const time = new Date(2025, 1, 31, 20, 0, 0, 0);
            expect(getCurrentWatch(time).name).toBe('First Watch');
        });

        test('getCurrentWatch return Middle watch after start time', () => {
            const time = new Date(2025, 1, 31, 0, 0, 0, 0);
            expect(getCurrentWatch(time).name).toBe('Middle Watch');
        });

        test('getCurrentWatch return Morning watch after start time', () => {
            const time = new Date(2025, 1, 31, 4, 0, 0, 0);
            expect(getCurrentWatch(time).name).toBe('Morning Watch');
        });

        test('getCurrentWatch return Forenoon watch after start time', () => {
            const time = new Date(2025, 1, 31, 8, 0, 0, 0);
            expect(getCurrentWatch(time).name).toBe('Forenoon Watch');
        });

        test('getCurrentWatch return Afternoon watch after start time', () => {
            const time = new Date(2025, 1, 31, 12, 0, 0, 0);
            expect(getCurrentWatch(time).name).toBe('Afternoon Watch');
        });

        test('getCurrentWatch return First Dog watch after start time', () => {
            const time = new Date(2025, 1, 31, 16, 0, 0, 0);
            expect(getCurrentWatch(time).name).toBe('First Dog Watch');
        });

        test('getCurrentWatch return Second Dog watch after start time', () => {
            const time = new Date(2025, 1, 31, 18, 0, 0, 0);
            expect(getCurrentWatch(time).name).toBe('Second Dog Watch');
        });
    });

    describe('Current watch should be returned before the watch end time', () => {
        test('getCurrentWatch return First watch before end time', () => {
            const time = new Date(2025, 1, 31, 23, 59, 59, 0);
            expect(getCurrentWatch(time).name).toBe('First Watch');
        });

        test('getCurrentWatch return Middle watch before end time', () => {
            const time = new Date(2025, 1, 31, 3, 59, 59, 0);
            expect(getCurrentWatch(time).name).toBe('Middle Watch');
        });

        test('getCurrentWatch return Morning watch before end time', () => {
            const time = new Date(2025, 1, 31, 7, 59, 59, 0);
            expect(getCurrentWatch(time).name).toBe('Morning Watch');
        });

        test('getCurrentWatch return Forenoon watch before end time', () => {
            const time = new Date(2025, 1, 31, 11, 59, 59, 0);
            expect(getCurrentWatch(time).name).toBe('Forenoon Watch');
        });

        test('getCurrentWatch return Afternoon watch before end time', () => {
            const time = new Date(2025, 1, 31, 15, 59, 59, 0);
            expect(getCurrentWatch(time).name).toBe('Afternoon Watch');
        });

        test('getCurrentWatch return First Dog watch before end time', () => {
            const time = new Date(2025, 1, 31, 17, 59, 59, 0);
            expect(getCurrentWatch(time).name).toBe('First Dog Watch');
        });

        test('getCurrentWatch return Second Dog watch before end time', () => {
            const time = new Date(2025, 1, 31, 19, 59, 59, 0);
            expect(getCurrentWatch(time).name).toBe('Second Dog Watch');
        });
    });
});

describe('Correct time and bells are returned for the First Watch', () => {

    test('1 bell of the First Watch', () => {
        const time = new Date(2025, 1, 31, 20, 30, 0, 0);
        expect(getBells(time)).toBe(1);
        expect(getShipsTime(time)).toBe('One bell of the First Watch');
    });

    test('2 bells of the First Watch', () => {
        const time = new Date(2025, 1, 31, 21, 0, 0, 0);
        expect(getBells(time)).toBe(2);
        expect(getShipsTime(time)).toBe('Two bells of the First Watch');
    });

    test('3 bells of the First Watch', () => {
        const time = new Date(2025, 1, 31, 21, 30, 0, 0);
        expect(getBells(time)).toBe(3);
        expect(getShipsTime(time)).toBe('Three bells of the First Watch');
    });

    test('4 bell of the First Watch', () => {
        const time = new Date(2025, 1, 31, 22, 0, 0, 0);
        expect(getBells(time)).toBe(4);
        expect(getShipsTime(time)).toBe('Four bells of the First Watch');
    });

    test('5 bell of the First Watch', () => {
        const time = new Date(2025, 1, 31, 22, 30, 0, 0);
        expect(getBells(time)).toBe(5);
        expect(getShipsTime(time)).toBe('Five bells of the First Watch');
    });

    test('6 bells of the First Watch', () => {
        const time = new Date(2025, 1, 31, 23, 0, 0, 0);
        expect(getBells(time)).toBe(6);
        expect(getShipsTime(time)).toBe('Six bells of the First Watch');
    });

    test('7 bells of the First Watch', () => {
        const time = new Date(2025, 1, 31, 23, 30, 0, 0);
        expect(getBells(time)).toBe(7);
        expect(getShipsTime(time)).toBe('Seven bells of the First Watch');
    });

    test('8 bell of the First Watch', () => {
        const time = new Date(2025, 1, 31, 24, 0, 0, 0);
        expect(getBells(time)).toBe(8);
        expect(getShipsTime(time)).toBe('Eight bells of the First Watch');
    });
});

describe('Correct time and bells are returned for the Middle Watch', () => {

    test('1 bell of the Middle Watch', () => {
        const time = new Date(2025, 1, 31, 0, 30, 0, 0);
        expect(getBells(time)).toBe(1);
        expect(getShipsTime(time)).toBe('One bell of the Middle Watch');
    });

    test('2 bells of the Middle Watch', () => {
        const time = new Date(2025, 1, 31, 1, 0, 0, 0);
        expect(getBells(time)).toBe(2);
        expect(getShipsTime(time)).toBe('Two bells of the Middle Watch');
    });

    test('3 bells of the Middle Watch', () => {
        const time = new Date(2025, 1, 31, 1, 30, 0, 0);
        expect(getBells(time)).toBe(3);
        expect(getShipsTime(time)).toBe('Three bells of the Middle Watch');
    });

    test('4 bell of the Middle Watch', () => {
        const time = new Date(2025, 1, 31, 2, 0, 0, 0);
        expect(getBells(time)).toBe(4);
        expect(getShipsTime(time)).toBe('Four bells of the Middle Watch');
    });

    test('5 bell of the Middle Watch', () => {
        const time = new Date(2025, 1, 31, 2, 30, 0, 0);
        expect(getBells(time)).toBe(5);
        expect(getShipsTime(time)).toBe('Five bells of the Middle Watch');
    });

    test('6 bells of the Middle Watch', () => {
        const time = new Date(2025, 1, 31, 3, 0, 0, 0);
        expect(getBells(time)).toBe(6);
        expect(getShipsTime(time)).toBe('Six bells of the Middle Watch');
    });

    test('7 bells of the Middle Watch', () => {
        const time = new Date(2025, 1, 31, 3, 30, 0, 0);
        expect(getBells(time)).toBe(7);
        expect(getShipsTime(time)).toBe('Seven bells of the Middle Watch');
    });

    test('8 bell of the Middle Watch', () => {
        const time = new Date(2025, 1, 31, 4, 0, 0, 0);
        expect(getBells(time)).toBe(8);
        expect(getShipsTime(time)).toBe('Eight bells of the Middle Watch');
    });
});

describe('Correct time and bells are returned for the Morning Watch', () => {

    test('1 bell of the Morning Watch', () => {
        const time = new Date(2025, 1, 31, 4, 30, 0, 0);
        expect(getBells(time)).toBe(1);
        expect(getShipsTime(time)).toBe('One bell of the Morning Watch');
    });

    test('2 bells of the Morning Watch', () => {
        const time = new Date(2025, 1, 31, 5, 0, 0, 0);
        expect(getBells(time)).toBe(2);
        expect(getShipsTime(time)).toBe('Two bells of the Morning Watch');
    });

    test('3 bells of the Morning Watch', () => {
        const time = new Date(2025, 1, 31, 5, 30, 0, 0);
        expect(getBells(time)).toBe(3);
        expect(getShipsTime(time)).toBe('Three bells of the Morning Watch');
    });

    test('4 bell of the Morning Watch', () => {
        const time = new Date(2025, 1, 31, 6, 0, 0, 0);
        expect(getBells(time)).toBe(4);
        expect(getShipsTime(time)).toBe('Four bells of the Morning Watch');
    });

    test('5 bell of the Morning Watch', () => {
        const time = new Date(2025, 1, 31, 6, 30, 0, 0);
        expect(getBells(time)).toBe(5);
        expect(getShipsTime(time)).toBe('Five bells of the Morning Watch');
    });

    test('6 bells of the Morning Watch', () => {
        const time = new Date(2025, 1, 31, 7, 0, 0, 0);
        expect(getBells(time)).toBe(6);
        expect(getShipsTime(time)).toBe('Six bells of the Morning Watch');
    });

    test('7 bells of the Morning Watch', () => {
        const time = new Date(2025, 1, 31, 7, 30, 0, 0);
        expect(getBells(time)).toBe(7);
        expect(getShipsTime(time)).toBe('Seven bells of the Morning Watch');
    });

    test('8 bell of the Morning Watch', () => {
        const time = new Date(2025, 1, 31, 8, 0, 0, 0);
        expect(getBells(time)).toBe(8);
        expect(getShipsTime(time)).toBe('Eight bells of the Morning Watch');
    });
});

describe('Correct time and bells are returned for the Forenoon Watch', () => {

    test('1 bell of the Forenoon Watch', () => {
        const time = new Date(2025, 1, 31, 8, 30, 0, 0);
        expect(getBells(time)).toBe(1);
        expect(getShipsTime(time)).toBe('One bell of the Forenoon Watch');
    });

    test('2 bells of the Forenoon Watch', () => {
        const time = new Date(2025, 1, 31, 9, 0, 0, 0);
        expect(getBells(time)).toBe(2);
        expect(getShipsTime(time)).toBe('Two bells of the Forenoon Watch');
    });

    test('3 bells of the Forenoon Watch', () => {
        const time = new Date(2025, 1, 31, 9, 30, 0, 0);
        expect(getBells(time)).toBe(3);
        expect(getShipsTime(time)).toBe('Three bells of the Forenoon Watch');
    });

    test('4 bell of the Forenoon Watch', () => {
        const time = new Date(2025, 1, 31, 10, 0, 0, 0);
        expect(getBells(time)).toBe(4);
        expect(getShipsTime(time)).toBe('Four bells of the Forenoon Watch');
    });

    test('5 bell of the Forenoon Watch', () => {
        const time = new Date(2025, 1, 31, 10, 30, 0, 0);
        expect(getBells(time)).toBe(5);
        expect(getShipsTime(time)).toBe('Five bells of the Forenoon Watch');
    });

    test('6 bells of the Forenoon Watch', () => {
        const time = new Date(2025, 1, 31, 11, 0, 0, 0);
        expect(getBells(time)).toBe(6);
        expect(getShipsTime(time)).toBe('Six bells of the Forenoon Watch');
    });

    test('7 bells of the Forenoon Watch', () => {
        const time = new Date(2025, 1, 31, 11, 30, 0, 0);
        expect(getBells(time)).toBe(7);
        expect(getShipsTime(time)).toBe('Seven bells of the Forenoon Watch');
    });

    test('8 bell of the Forenoon Watch', () => {
        const time = new Date(2025, 1, 31, 12, 0, 0, 0);
        expect(getBells(time)).toBe(8);
        expect(getShipsTime(time)).toBe('Eight bells of the Forenoon Watch');
    });
});

describe('Correct time and bells are returned for the Afternoon Watch', () => {

    test('1 bell of the Afternoon Watch', () => {
        const time = new Date(2025, 1, 31, 12, 30, 0, 0);
        expect(getBells(time)).toBe(1);
        expect(getShipsTime(time)).toBe('One bell of the Afternoon Watch');
    });

    test('2 bells of the Afternoon Watch', () => {
        const time = new Date(2025, 1, 31, 13, 0, 0, 0);
        expect(getBells(time)).toBe(2);
        expect(getShipsTime(time)).toBe('Two bells of the Afternoon Watch');
    });

    test('3 bells of the Afternoon Watch', () => {
        const time = new Date(2025, 1, 31, 13, 30, 0, 0);
        expect(getBells(time)).toBe(3);
        expect(getShipsTime(time)).toBe('Three bells of the Afternoon Watch');
    });

    test('4 bell of the Afternoon Watch', () => {
        const time = new Date(2025, 1, 31, 14, 0, 0, 0);
        expect(getBells(time)).toBe(4);
        expect(getShipsTime(time)).toBe('Four bells of the Afternoon Watch');
    });

    test('5 bell of the Afternoon Watch', () => {
        const time = new Date(2025, 1, 31, 14, 30, 0, 0);
        expect(getBells(time)).toBe(5);
        expect(getShipsTime(time)).toBe('Five bells of the Afternoon Watch');
    });

    test('6 bells of the Afternoon Watch', () => {
        const time = new Date(2025, 1, 31, 15, 0, 0, 0);
        expect(getBells(time)).toBe(6);
        expect(getShipsTime(time)).toBe('Six bells of the Afternoon Watch');
    });

    test('7 bells of the Afternoon Watch', () => {
        const time = new Date(2025, 1, 31, 15, 30, 0, 0);
        expect(getBells(time)).toBe(7);
        expect(getShipsTime(time)).toBe('Seven bells of the Afternoon Watch');
    });

    test('8 bell of the Afternoon Watch', () => {
        const time = new Date(2025, 1, 31, 16, 0, 0, 0);
        expect(getBells(time)).toBe(8);
        expect(getShipsTime(time)).toBe('Eight bells of the Afternoon Watch');
    });
});

describe('Correct time and bells are returned for the First Dog Watch', () => {

    test('1 bell of the First Dog Watch', () => {
        const time = new Date(2025, 1, 31, 16, 30, 0, 0);
        expect(getBells(time)).toBe(1);
        expect(getShipsTime(time)).toBe('One bell of the First Dog Watch');
    });

    test('2 bells of the First Dog Watch', () => {
        const time = new Date(2025, 1, 31, 17, 0, 0, 0);
        expect(getBells(time)).toBe(2);
        expect(getShipsTime(time)).toBe('Two bells of the First Dog Watch');
    });

    test('3 bells of the First Dog Watch', () => {
        const time = new Date(2025, 1, 31, 17, 30, 0, 0);
        expect(getBells(time)).toBe(3);
        expect(getShipsTime(time)).toBe('Three bells of the First Dog Watch');
    });

    test('4 bell of the First Dog Watch', () => {
        const time = new Date(2025, 1, 31, 18, 0, 0, 0);
        expect(getBells(time)).toBe(4);
        expect(getShipsTime(time)).toBe('Four bells of the First Dog Watch');
    });
});

describe('Correct time and bells are returned for the Second Dog Watch', () => {

    test('1 bell of the Second Dog Watch', () => {
        const time = new Date(2025, 1, 31, 18, 30, 0, 0);
        expect(getBells(time)).toBe(1);
        expect(getShipsTime(time)).toBe('One bell of the Second Dog Watch');
    });

    test('2 bells of the Second Dog Watch', () => {
        const time = new Date(2025, 1, 31, 19, 0, 0, 0);
        expect(getBells(time)).toBe(2);
        expect(getShipsTime(time)).toBe('Two bells of the Second Dog Watch');
    });

    test('3 bells of the Second Dog Watch', () => {
        const time = new Date(2025, 1, 31, 19, 30, 0, 0);
        expect(getBells(time)).toBe(3);
        expect(getShipsTime(time)).toBe('Three bells of the Second Dog Watch');
    });

    test('4 bell of the Second Dog Watch', () => {
        const time = new Date(2025, 1, 31, 20, 0, 0, 0);
        expect(getBells(time)).toBe(4);
        expect(getShipsTime(time)).toBe('Four bells of the Second Dog Watch');
    });
});
