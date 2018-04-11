import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hour',
})
export class HourPipe implements PipeTransform {

    public  transform(value: number) {
        let hour = String(value);
        if (hour.length === 1) {
            hour = `0${hour}`;
        }
        return `${hour}00`;
    }
}
