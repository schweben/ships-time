import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

    public getShipsTime(): string {
        return 'Three bells in the middle watch';
    }
}
