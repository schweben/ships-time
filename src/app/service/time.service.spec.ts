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

    it('Should return an array of watches', () => {
        const watches = timeService.getWatches();
        expect(watches.length).toEqual(7);
        expect(watches[0].name).toEqual('First watch');
        expect(watches[1].name).toEqual('Middle watch');
        expect(watches[2].name).toEqual('Morning watch');
        expect(watches[3].name).toEqual('Forenoon watch');
        expect(watches[4].name).toEqual('Afternoon watch');
        expect(watches[5].name).toEqual('First dog watch');
        expect(watches[6].name).toEqual('Last dog watch');
    });
});
