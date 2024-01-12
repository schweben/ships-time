export class Watch {
    constructor(name, startHour, endHour) {
        this.name = name;
        this.startHour = startHour;
        this.endHour = endHour;

        if (this.endHour === 0) {
            this.adjustedEndHour = 24;
        } else {
            this.adjustedEndHour = endHour;
        }
    }

    isTimeInWatch(time) {
        const startTime = new Date(time);
        startTime.setHours(this.startHour);

        const endTime = new Date(time);
        endTime.setHours(this.adjustedEndHour);

        // If the end time is 00:00 then increment the date by 1 to
        // make it 00:00 of the next day
        if (this.adjustedEndHour === 24 && time.getHours() === 0) {
            time.setDate(time.getDate() + 1);
        }

        if ((startTime <= time) && (endTime > time)) {
            return true;
        }

        return false;
    }

    getBells(time) {
        if (time.getHours() === this.adjustedEndHour && time.getMinutes() === 0) {
            return this.getMaxBells();
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

        if (bells === 0 || bells > this.getMaxBells()) {
            throw new Error('Time is not in watch');
        }

        return bells;
    }

    getMaxBells() {
        return (this.adjustedEndHour - this.startHour) * 2;
    }
}
