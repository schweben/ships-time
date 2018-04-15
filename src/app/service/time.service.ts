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

    private bells = {
    };

    public getWatches(): Watch[] {
        return this.watches;
    }

    public getShipsTime(time: Date): string {
        const watch = this.getCurrentWatch(time);
        const bells = this.getBells(watch);
        return `${bells} in the ${watch.name}`;
    }

    private getCurrentWatch(time: Date): Watch {
        let currentWatch = null;

        this.watches.forEach((watch) => {
            if (watch.isTimeInWatch(time)) {
                currentWatch = watch;
            }
        });

        return currentWatch;
    }

    private getBells(watch: Watch): string {
        // const mins = now.getMinutes();

        // 239 mins in normal watch
        // 119 mins in dog watch
        const now = new Date();
        const bells = watch.getBells(now);

        if (bells === 1) {
            return 'One bell';
        } else {
            return `${bells} bells`;
        }
    }
}
