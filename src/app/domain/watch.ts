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
        let hours = time.getHours();
        const mins = time.getMinutes();

        if (this.endHour === 0) {
            this.endHour = 24;
        }

        if (this.endHour === 24 && hours === 0) {
            hours = 24;
        }

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

        // If the time is not in the watch then return 0 immediately
        if (!this.isTimeInWatch(time)) {
            return 0;
        }

        if (time.getHours() === this.endHour && time.getMinutes() === 0) {
            const maxBells = (this.endHour - this.startHour) * 2;
            return maxBells;
        }

        time.setSeconds(0);
        time.setMilliseconds(0);

        let bells = 0;
        const current = new Date(time.getTime());
        current.setHours(0, 0, 0, 0);
        current.setHours(this.startHour);

        const lookAhead = new Date(time.getTime());
        lookAhead.setHours(0, 0, 0, 0);
        lookAhead.setHours(this.startHour);
        lookAhead.setMinutes(lookAhead.getMinutes() + 30);

        if (time.getHours() === 0 && time.getMinutes() === 0) {
            time.setHours(24);
        }

        while ((current < time) && (lookAhead <= time)) {
            current.setMinutes(current.getMinutes() + 30);
            lookAhead.setMinutes(lookAhead.getMinutes() + 30);
            bells++;
        }
        return bells;
    }
}
