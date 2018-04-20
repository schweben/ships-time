import { TestBed } from '@angular/core/testing';

import { TimeService } from './time.service';

describe('TimeService', () => {
    let timeService: TimeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TimeService,
            ],
        }).compileComponents();

        timeService = TestBed.get(TimeService);
    });

    it('should return an array of watches', () => {
        const watches = timeService.getWatches();
        expect(watches.length).toEqual(7);
        expect(watches[0].name).toBe('First Watch');
        expect(watches[1].name).toBe('Middle Watch');
        expect(watches[2].name).toBe('Morning Watch');
        expect(watches[3].name).toBe('Forenoon Watch');
        expect(watches[4].name).toBe('Afternoon Watch');
        expect(watches[5].name).toBe('First Dog Watch');
        expect(watches[6].name).toBe('Last Dog Watch');
    });

    it('should return Four bells of the Last Dog Watch', () => {
        const time = new Date(2018, 4, 16, 20, 0);
        expect(timeService.getShipsTime(time)).toBe('Four bells of the Last Dog Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('First Watch');
    });

    it('should return One bell of the First Watch', () => {
        const time = new Date(2018, 4, 16, 20, 30);
        expect(timeService.getShipsTime(time)).toBe('One bell of the First Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('First Watch');
    });

    it('should return Two bells of the First Watch', () => {
        const time = new Date(2018, 4, 16, 21, 0);
        expect(timeService.getShipsTime(time)).toBe('Two bells of the First Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('First Watch');
    });

    it('should return Three bells of the First Watch', () => {
        const time = new Date(2018, 4, 16, 21, 30);
        expect(timeService.getShipsTime(time)).toBe('Three bells of the First Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('First Watch');
    });

    it('should return Four bells of the First Watch', () => {
        const time = new Date(2018, 4, 16, 22, 0);
        expect(timeService.getShipsTime(time)).toBe('Four bells of the First Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('First Watch');
    });

    it('should return Five bells of the First Watch', () => {
        const time = new Date(2018, 4, 16, 22, 30);
        expect(timeService.getShipsTime(time)).toBe('Five bells of the First Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('First Watch');
    });

    it('should return Six bells of the First Watch', () => {
        const time = new Date(2018, 4, 16, 23, 0);
        expect(timeService.getShipsTime(time)).toBe('Six bells of the First Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('First Watch');
    });

    it('should return Seven bells of the First Watch', () => {
        const time = new Date(2018, 4, 16, 23, 30);
        expect(timeService.getShipsTime(time)).toBe('Seven bells of the First Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('First Watch');
    });

    it('should return Eight bells of the First Watch (but current watch is Middle Watch)', () => {
        const time = new Date(2018, 4, 16, 0, 0);
        expect(timeService.getShipsTime(time)).toBe('Eight bells of the First Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Middle Watch');
    });

    it('should return One bell of the Middle Watch', () => {
        const time = new Date(2018, 4, 16, 0, 30);
        expect(timeService.getShipsTime(time)).toBe('One bell of the Middle Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Middle Watch');
    });

    it('should return Two bells of the Middle Watch', () => {
        const time = new Date(2018, 4, 16, 1, 0);
        expect(timeService.getShipsTime(time)).toBe('Two bells of the Middle Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Middle Watch');
    });

    it('should return Three bells of the Middle Watch', () => {
        const time = new Date(2018, 4, 16, 1, 30);
        expect(timeService.getShipsTime(time)).toBe('Three bells of the Middle Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Middle Watch');
    });

    it('should return Four bells of the Middle Watch', () => {
        const time = new Date(2018, 4, 16, 2, 0);
        expect(timeService.getShipsTime(time)).toBe('Four bells of the Middle Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Middle Watch');
    });

    it('should return Five bells of the Middle Watch', () => {
        const time = new Date(2018, 4, 16, 2, 30);
        expect(timeService.getShipsTime(time)).toBe('Five bells of the Middle Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Middle Watch');
    });

    it('should return Six bells of the Middle Watch', () => {
        const time = new Date(2018, 4, 16, 3, 0);
        expect(timeService.getShipsTime(time)).toBe('Six bells of the Middle Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Middle Watch');
    });

    it('should return Seven bells of the Middle Watch', () => {
        const time = new Date(2018, 4, 16, 3, 30);
        expect(timeService.getShipsTime(time)).toBe('Seven bells of the Middle Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Middle Watch');
    });

    it('should return Eight bells of the Middle Watch', () => {
        const time = new Date(2018, 4, 16, 4, 0);
        expect(timeService.getShipsTime(time)).toBe('Eight bells of the Middle Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Morning Watch');
    });

    it('should return One bell of the Morning Watch', () => {
        const time = new Date(2018, 4, 16, 4, 30);
        expect(timeService.getShipsTime(time)).toBe('One bell of the Morning Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Morning Watch');
    });

    it('should return Two bells of the Morning Watch', () => {
        const time = new Date(2018, 4, 16, 5, 0);
        expect(timeService.getShipsTime(time)).toBe('Two bells of the Morning Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Morning Watch');
    });

    it('should return Three bells of the Morning Watch', () => {
        const time = new Date(2018, 4, 16, 5, 30);
        expect(timeService.getShipsTime(time)).toBe('Three bells of the Morning Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Morning Watch');
    });

    it('should return Four bells of the Morning Watch', () => {
        const time = new Date(2018, 4, 16, 6, 0);
        expect(timeService.getShipsTime(time)).toBe('Four bells of the Morning Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Morning Watch');
    });

    it('should return Five bells of the Morning Watch', () => {
        const time = new Date(2018, 4, 16, 6, 30);
        expect(timeService.getShipsTime(time)).toBe('Five bells of the Morning Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Morning Watch');
    });

    it('should return Six bells of the Morning Watch', () => {
        const time = new Date(2018, 4, 16, 7, 0);
        expect(timeService.getShipsTime(time)).toBe('Six bells of the Morning Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Morning Watch');
    });

    it('should return Seven bells of the Morning Watch', () => {
        const time = new Date(2018, 4, 16, 7, 30);
        expect(timeService.getShipsTime(time)).toBe('Seven bells of the Morning Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Morning Watch');
    });

    it('should return Eight bells of the Morning Watch', () => {
        const time = new Date(2018, 4, 16, 8, 0);
        expect(timeService.getShipsTime(time)).toBe('Eight bells of the Morning Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Forenoon Watch');
    });

    it('should return One bell of the Forenoon Watch', () => {
        const time = new Date(2018, 4, 16, 8, 30);
        expect(timeService.getShipsTime(time)).toBe('One bell of the Forenoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Forenoon Watch');
    });

    it('should return Two bells of the Forenoon Watch', () => {
        const time = new Date(2018, 4, 16, 9, 0);
        expect(timeService.getShipsTime(time)).toBe('Two bells of the Forenoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Forenoon Watch');
    });

    it('should return Three bells of the Forenoon Watch', () => {
        const time = new Date(2018, 4, 16, 9, 30);
        expect(timeService.getShipsTime(time)).toBe('Three bells of the Forenoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Forenoon Watch');
    });

    it('should return Four bells of the Forenoon Watch', () => {
        const time = new Date(2018, 4, 16, 10, 0);
        expect(timeService.getShipsTime(time)).toBe('Four bells of the Forenoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Forenoon Watch');
    });

    it('should return Five bells of the Forenoon Watch', () => {
        const time = new Date(2018, 4, 16, 10, 30);
        expect(timeService.getShipsTime(time)).toBe('Five bells of the Forenoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Forenoon Watch');
    });

    it('should return Six bells of the Forenoon Watch', () => {
        const time = new Date(2018, 4, 16, 11, 0);
        expect(timeService.getShipsTime(time)).toBe('Six bells of the Forenoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Forenoon Watch');
    });

    it('should return Seven bells of the Forenoon Watch', () => {
        const time = new Date(2018, 4, 16, 11, 30);
        expect(timeService.getShipsTime(time)).toBe('Seven bells of the Forenoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Forenoon Watch');
    });

    it('should return Eight bells of the Forenoon Watch', () => {
        const time = new Date(2018, 4, 16, 12, 0);
        expect(timeService.getShipsTime(time)).toBe('Eight bells of the Forenoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Afternoon Watch');
    });

    it('should return One bell of the Afternoon Watch', () => {
        const time = new Date(2018, 4, 16, 12, 30);
        expect(timeService.getShipsTime(time)).toBe('One bell of the Afternoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Afternoon Watch');
    });

    it('should return Two bells of the Afternoon Watch', () => {
        const time = new Date(2018, 4, 16, 13, 0);
        expect(timeService.getShipsTime(time)).toBe('Two bells of the Afternoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Afternoon Watch');
    });

    it('should return Three bells of the Afternoon Watch', () => {
        const time = new Date(2018, 4, 16, 13, 30);
        expect(timeService.getShipsTime(time)).toBe('Three bells of the Afternoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Afternoon Watch');
    });

    it('should return Four bells of the Afternoon Watch', () => {
        const time = new Date(2018, 4, 16, 14, 0);
        expect(timeService.getShipsTime(time)).toBe('Four bells of the Afternoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Afternoon Watch');
    });

    it('should return Five bells of the Afternoon Watch', () => {
        const time = new Date(2018, 4, 16, 14, 30);
        expect(timeService.getShipsTime(time)).toBe('Five bells of the Afternoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Afternoon Watch');
    });

    it('should return Six bells of the Afternoon Watch', () => {
        const time = new Date(2018, 4, 16, 15, 0);
        expect(timeService.getShipsTime(time)).toBe('Six bells of the Afternoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Afternoon Watch');
    });

    it('should return Seven bells of the Afternoon Watch', () => {
        const time = new Date(2018, 4, 16, 15, 30);
        expect(timeService.getShipsTime(time)).toBe('Seven bells of the Afternoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Afternoon Watch');
    });

    it('should return Eight bells of the Afternoon Watch', () => {
        const time = new Date(2018, 4, 16, 16, 0);
        expect(timeService.getShipsTime(time)).toBe('Eight bells of the Afternoon Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('First Dog Watch');
    });

    it('should return One bell of the First Dog Watch', () => {
        const time = new Date(2018, 4, 16, 16, 30);
        expect(timeService.getShipsTime(time)).toBe('One bell of the First Dog Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('First Dog Watch');
    });

    it('should return Two bells of the First Dog Watch', () => {
        const time = new Date(2018, 4, 16, 17, 0);
        expect(timeService.getShipsTime(time)).toBe('Two bells of the First Dog Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('First Dog Watch');
    });

    it('should return Three bells of the First Dog Watch', () => {
        const time = new Date(2018, 4, 16, 17, 30);
        expect(timeService.getShipsTime(time)).toBe('Three bells of the First Dog Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('First Dog Watch');
    });

    it('should return Four bells of the First Dog Watch', () => {
        const time = new Date(2018, 4, 16, 18, 0);
        expect(timeService.getShipsTime(time)).toBe('Four bells of the First Dog Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Last Dog Watch');
    });

    it('should return One bell of the Last Dog Watch', () => {
        const time = new Date(2018, 4, 16, 18, 30);
        expect(timeService.getShipsTime(time)).toBe('One bell of the Last Dog Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Last Dog Watch');
    });

    it('should return Two bells of the Last Dog Watch', () => {
        const time = new Date(2018, 4, 16, 19, 0);
        expect(timeService.getShipsTime(time)).toBe('Two bells of the Last Dog Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Last Dog Watch');
    });

    it('should return Three bells of the Last Dog Watch', () => {
        const time = new Date(2018, 4, 16, 19, 30);
        expect(timeService.getShipsTime(time)).toBe('Three bells of the Last Dog Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('Last Dog Watch');
    });

    it('should return Four bells of the Last Dog Watch', () => {
        const time = new Date(2018, 4, 16, 20, 0);
        expect(timeService.getShipsTime(time)).toBe('Four bells of the Last Dog Watch');
        expect(timeService.getCurrentWatch(time).name).toBe('First Watch');
    });
});
