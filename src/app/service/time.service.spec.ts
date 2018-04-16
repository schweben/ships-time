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

    it('should return the correct ship\s time', () => {
        const time = new Date(2018, 4, 16, 6, 0, 0, 0);
        expect(timeService.getShipsTime(time)).toBe('Four bells in the Morning Watch');
    });
});
