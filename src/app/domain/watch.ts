export class Watch {
    public name: string;
    public startHour: number;
    public endHour: number;

    constructor(name: string, startHour: number, endHour: number) {
        this.name = name;
        this.startHour = startHour;
        this.endHour = endHour;
    }
}
