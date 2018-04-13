import { Watch } from '../domain/watch';

export class MockTimeService {

    public getWatches(): Watch[] {
        const watches = [
            new Watch('First watch', 20, 0),
        ];

        return watches;
    }

    public getShipsTime(time: Date): string {
        return 'One bell in the First watch';
    }
}
