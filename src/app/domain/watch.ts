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

        if (hours === this.startHour) {
            if (mins >= 0) {
                return true;
            }
        } else if (hours === this.endHour) {
            if (mins <= 59) {
                return true;
            }
        } else {
            if (hours > this.startHour && hours < this.endHour) {
                return true;
            }
        }
        return false;
    }

    public getBells(time: Date): number {

        let bells = 0;

        for (let i = this.startHour; i <= time.getMinutes(); i = i + 30) {
            bells++;
        }

        return bells;
    }
}
