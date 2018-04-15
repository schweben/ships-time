export class Watch {
    public name: string;
    public startHour: number;
    public endHour: number;

    constructor(name: string, startHour: number, endHour: number) {
        this.name = name;
        this.startHour = startHour;
        this.endHour = endHour;
    }

    public isTimeInWatch(time: Date): boolean {
        const hours = time.getHours();
        const mins = time.getMinutes();

        if (hours === this.startHour && mins >= 30) {
                return true;
        }

        if (hours === this.endHour && mins < 30) {
            return true;
        }

        if (hours > this.startHour && hours < this.endHour) {
            return true;
        }

        return false;
    }

    public getBells(time: Date): number {

        if (time.getHours() === this.startHour && time.getMinutes() === 0) {
            return 8;
        }

        time.setSeconds(0);
        time.setMilliseconds(0);

        let bells = 0;
        const current = new Date(time);
        current.setHours(0, 0, 0, 0);
        current.setHours(this.startHour);

        while (current < time) {
            current.setMinutes(current.getMinutes() + 30);
            bells++;
        }
        return bells;
    }
}
