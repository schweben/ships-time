import { TestBed } from '@angular/core/testing';

import { Watch } from './watch';

describe('Watch', () => {

    it('should be created correctly', () => {
        const watch = new Watch('Test watch', 4, 8);
        expect(watch.name).toBe('Test watch');
        expect(watch.startHour).toBe(4);
        expect(watch.endHour).toBe(8);
    });

    it('should return 0359 as not in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 3, 59, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('should return 0400 as not in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 4, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('should return 0429 as not in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 4, 29, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('should return 0430 as 1 bell in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 4, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(1);
    });

    it('should return 0431 as 1 bell in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 4, 31, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(1);
    });

    it('should return 0459 as 1 bell in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 4, 59, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(1);
    });

    it('should return 0500 as 2 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 5, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(2);
    });

    it('should return 0529 as 2 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 5, 29, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(2);
    });

    it('should return 0530 as 3 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 5, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(3);
    });

    it('should return 0559 as 3 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 5, 59, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(3);
    });

    it('should return 0600 as 4 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 6, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(4);
    });

    it('should return 0601 as 4 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 6, 1, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(4);
    });

    it('should return 0629 as 4 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 6, 29, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(4);
    });

    it('should return 0630 as 5 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 6, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(5);
    });

    it('should return 0659 as 5 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 6, 59, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(5);
    });

    it('should return 0700 as 6 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 7, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(6);
    });

    it('should return 0729 as 6 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 7, 29, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(6);
    });

    it('should return 0730 as 7 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 7, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(7);
    });

    it('should return 0759 as 7 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 7, 59, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(7);
    });

    it('should return 0800 as 8 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 8, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(8);
    });

    it('should return 0801 as 8 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 8, 1, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(8);
    });

    it('should return 0829 as 8 bells in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 8, 29, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(8);
    });

    it('should return 0830 as not in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 8, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('should return 0831 as not in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 8, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('should return 0900 as not in the Test watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 9, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('should return 1800 as 4 bells in a Dog Watch', () => {
        const watch = new Watch('Test dog watch', 16, 18);
        const time = new Date(2018, 4, 13, 18, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(4);
    });

    it('should return 1830 as outside of a Dog Watch', () => {
        const watch = new Watch('Test dog watch', 16, 18);
        const time = new Date(2018, 4, 13, 18, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('should return 2359 as 7 bells in the first watch', () => {
        const watch = new Watch('First watch', 20, 0);
        const time = new Date(2018, 4, 13, 23, 59, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(7);
    });

    it('should return 0000 as 8 bells in the first watch', () => {
        const watch = new Watch('First watch', 20, 0);
        const time = new Date(2018, 4, 13, 0, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(8);
    });

    it('should return 0001 as 8 bells in the first watch', () => {
        const watch = new Watch('First watch', 20, 24);
        const time = new Date(2018, 4, 13, 0, 1, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(8);
    });

    it('should return 0000 should not be in the middle watch', () => {
        const watch = new Watch('Middle watch', 0, 4);
        const time = new Date(2018, 4, 13, 0, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('should return 0001 should not be in the middle watch', () => {
        const watch = new Watch('Middle watch', 0, 4);
        const time = new Date(2018, 4, 13, 0, 1, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('should return 0030 as 1 bell in the middle watch', () => {
        const watch = new Watch('Middle watch', 0, 4);
        const time = new Date(2018, 4, 13, 0, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(1);
    });
});
