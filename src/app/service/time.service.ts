import { Injectable } from '@angular/core';

import { Watch } from '../domain/watch';

@Injectable()
export class TimeService {

    private watches = [
        new Watch('First Watch', 20, 0),
        new Watch('Middle Watch', 0, 4),
        new Watch('Morning Watch', 4, 8),
        new Watch('Forenoon Watch', 8, 12),
        new Watch('Afternoon Watch', 12, 16),
        new Watch('First Dog Watch', 16, 18),
        new Watch('Last Dog Watch', 18, 20),
    ];

    public getWatches(): Watch[] {
        return this.watches;
    }

    public getShipsTime(time: Date): string {
        const watch = this.getCurrentWatch(time);
        const bells = this.getBells(time, watch);
        return `${bells} of the ${watch.name}`;
    }

    public getCurrentWatch(time: Date): Watch {
        let currentWatch = null;

        this.watches.forEach((watch) => {
            if (watch.isTimeInWatch(time)) {
                currentWatch = watch;
            }
        });

        return currentWatch;
    }

    private getBells(time: Date, watch: Watch): string {
        const bells = watch.getBells(time);

        switch (bells) {
            case 1:
                return 'One bell';
            case 2:
                return 'Two bells';
            case 3:
                return 'Three bells';
            case 4:
                return 'Four bells';
            case 5:
                return 'Five bells';
            case 6:
                return 'Six bells';
            case 7:
                return 'Seven bells';
            case 8:
                return 'Eight bells';
        }
    }
}
