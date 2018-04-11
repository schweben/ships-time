import { Injectable } from '@angular/core';

import { Watch } from '../domain/watch';

@Injectable()
export class TimeService {

    private watches = [
        new Watch('First watch', 20, 0),
        new Watch('Middle watch', 0, 4),
        new Watch('Morning watch', 4, 8),
        new Watch('Forenoon watch', 8, 12),
        new Watch('Afternoon watch', 12, 16),
        new Watch('First dog watch', 16, 18),
        new Watch('Last dog watch', 18, 20),
    ];

    public getWatches(): any {
        return this.watches;
    }

    public getShipsTime(): string {
        const now = new Date();
        console.log(now.getHours());
        return 'Three bells in the middle watch';
    }
}
