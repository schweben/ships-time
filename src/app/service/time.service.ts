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
        let watch = this.getCurrentWatch(time);
        let bells = watch.getBells(time);

        if ((bells < 1) || (bells > watch.getMaxBells())) {
            watch = this.getPreviousWatch(watch);
            bells = watch.getBells(time);
        }
        const bellText = this.getBellText(bells);

        return `${bellText} of the ${watch.name}`;
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

    private getPreviousWatch(currentWatch: Watch): Watch {
        for (let i = 0; i < this.watches.length; i++) {

            if (this.watches[i] === currentWatch) {
                if (i > 0) {
                    return this.watches[i - 1];
                } else {
                    return this.watches[this.watches.length - 1];
                }
            }
        }
    }

    private getBellText(bells: number): string {

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
