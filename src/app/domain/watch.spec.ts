import { TestBed } from '@angular/core/testing';

import { Watch } from './watch';

describe('Watch', () => {

    it('Should create Watch correctly', () => {
        const watch = new Watch('Test watch', 4, 8);
        expect(watch.name).toBe('Test watch');
        expect(watch.startHour).toBe(4);
        expect(watch.endHour).toBe(8);
    });

    it('0600 should be in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 6, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
    });

    it('0601 should be in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 6, 1, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
    });

    it('0759 should be in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 7, 59, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
    });

    it('0800 should be in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 8, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
    });

    it('0900 should not be in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 9, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
    });

    it('0359 should not be in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 3, 59, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
    });

    it('0801 should be in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 8, 1, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
    });

    it('0400 should be 8 bells', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 4, 0, 0, 0);
        expect(watch.getBells(time)).toBe(8);
    });

    it('0430 should be 1 bell', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 4, 30, 0, 0);
        expect(watch.getBells(time)).toBe(1);
    });

    it('0500 should be 2 bells', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 5, 0, 0, 0);
        expect(watch.getBells(time)).toBe(2);
    });

    it('0530 should be 3 bells', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 5, 30, 0, 0);
        expect(watch.getBells(time)).toBe(3);
    });

    it('0600 should be 4 bells', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 6, 0, 0, 0);
        expect(watch.getBells(time)).toBe(4);
    });

    it('0630 should be 5 bells', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 6, 30, 0, 0);
        expect(watch.getBells(time)).toBe(5);
    });

    it('0700 should be 6 bells', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 7, 0, 0, 0);
        expect(watch.getBells(time)).toBe(6);
    });

    it('0730 should be 7 bells', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 7, 30, 0, 0);
        expect(watch.getBells(time)).toBe(7);
    });

    it('0800 should be outside of the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 8, 0, 0, 0);
        expect(watch.getBells(time)).toThrowError();
    });

    it('0800 should be 8 bells', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 8, 0, 0, 0);
        expect(watch.getBells(time)).toBe(8);
    });

    it('1800 should be 4 bells in a Dog Watch', () => {
        const watch = new Watch('Test watch', 16, 18);
        const time = new Date(2018, 4, 13, 18, 0, 0, 0);
        expect(watch.getBells(time)).toBe(4);
    });

    it('1830 should be outside of a Dog Watch', () => {
        const watch = new Watch('Test watch', 16, 18);
        const time = new Date(2018, 4, 13, 18, 30, 0, 0);
        expect(watch.getBells(time)).toThrowError();
    });
});
