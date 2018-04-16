import { TestBed } from '@angular/core/testing';

import { Watch } from './watch';

describe('Watch', () => {

    it('Should create Watch correctly', () => {
        const watch = new Watch('Test watch', 4, 8);
        expect(watch.name).toBe('Test watch');
        expect(watch.startHour).toBe(4);
        expect(watch.endHour).toBe(8);
    });

    it('0359 should not be in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 3, 59, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('0400 should not be in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 4, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('0429 should not be in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 4, 29, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('0430 should be 1 bell in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 4, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(1);
    });

    it('0431 should be 1 bell in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 4, 31, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(1);
    });

    it('0459 should be 1 bell in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 4, 59, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(1);
    });

    it('0500 should be 2 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 5, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(2);
    });

    it('0529 should be 2 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 5, 29, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(2);
    });

    it('0530 should be 3 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 5, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(3);
    });

    it('0559 should be 3 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 5, 59, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(3);
    });

    it('0600 should be 4 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 6, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(4);
    });

    it('0601 should be 4 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 6, 1, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(4);
    });

    it('0629 should be 4 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 6, 29, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(4);
    });

    it('0630 should be 5 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 6, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(5);
    });

    it('0659 should be 5 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 6, 59, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(5);
    });

    it('0700 should be 6 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 7, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(6);
    });

    it('0729 should be 6 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 7, 29, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(6);
    });

    it('0730 should be 7 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 7, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(7);
    });

    it('0759 should be 7 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 7, 59, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(7);
    });

    it('0800 should be 8 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 8, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(8);
    });

    it('0801 should be 8 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 8, 1, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(8);
    });

    it('0829 should be 8 bells in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 8, 29, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(8);
    });

    it('0830 should not be in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 8, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('0831 should not be in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 8, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('0900 should not be in the watch', () => {
        const watch = new Watch('Test watch', 4, 8);
        const time = new Date(2018, 4, 13, 9, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('1800 should be 4 bells in a Dog Watch', () => {
        const watch = new Watch('Test dog watch', 16, 18);
        const time = new Date(2018, 4, 13, 18, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(4);
    });

    it('1830 should be outside of a Dog Watch', () => {
        const watch = new Watch('Test dog watch', 16, 18);
        const time = new Date(2018, 4, 13, 18, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('1159 should be 7 bells in the first watch', () => {
        const watch = new Watch('First watch', 20, 0);
        const time = new Date(2018, 4, 13, 11, 59, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(7);
    });

    it('0000 should be 8 bells in the first watch', () => {
        const watch = new Watch('First watch', 20, 0);
        const time = new Date(2018, 4, 13, 0, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(8);
    });

    it('0001 should be 8 bells in the first watch', () => {
        const watch = new Watch('First watch', 20, 0);
        const time = new Date(2018, 4, 13, 0, 1, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(8);
    });

    it('0000 should not be in the middle watch', () => {
        const watch = new Watch('Middle watch', 0, 4);
        const time = new Date(2018, 4, 13, 0, 0, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('0001 should not be in the middle watch', () => {
        const watch = new Watch('Middle watch', 0, 4);
        const time = new Date(2018, 4, 13, 0, 1, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeFalsy();
        expect(watch.getBells(time)).toBe(0);
    });

    it('0030 should be 1 bell in the middle watch', () => {
        const watch = new Watch('Middle watch', 0, 4);
        const time = new Date(2018, 4, 13, 0, 30, 0, 0);
        expect(watch.isTimeInWatch(time)).toBeTruthy();
        expect(watch.getBells(time)).toBe(1);
    });
});
