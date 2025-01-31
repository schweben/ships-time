import { Watch } from '../domain/Watch';

export default class TimeService {
	watches = [
		new Watch('First Watch', 20, 0),
		new Watch('Middle Watch', 0, 4),
		new Watch('Morning Watch', 4, 8),
		new Watch('Forenoon Watch', 8, 12),
		new Watch('Afternoon Watch', 12, 16),
		new Watch('First Dog Watch', 16, 18),
		new Watch('Second Dog Watch', 18, 20),
	];

	getWatches() {
		return this.watches;
	}

	getShipsTime(currentTime) {
		const time = new Date(currentTime.getTime());
		let watch = this.getCurrentWatch(time);
		let bells;
		try {
			bells = watch.getBells(time);
		} catch (Error) {
			watch = this.#getPreviousWatch(watch);
			bells = watch.getBells(time);
		}

		const bellText = this.#getBellText(bells);

		return `${bellText} of the ${watch.name}`;
	}

	getBells(currentTime) {
		const time = new Date(currentTime.getTime());
		const watch = this.getCurrentWatch(time);
		try {
			return watch.getBells(time);
		} catch (Error) {
			return this.#getPreviousWatch(watch).getBells(time);
		}
	}

	getCurrentWatch(time) {
		let currentWatch = null;

		this.watches.forEach((watch) => {
			if (watch.isTimeInWatch(time)) {
				currentWatch = watch;
			}
		});

		return currentWatch;
	}

	#getPreviousWatch(currentWatch) {
		for (let i = 0; i < this.watches.length; i++) {

			if (this.watches[i] === currentWatch) {
				if (i > 0) {
					return this.watches[i - 1];
				} else {
					return this.watches[this.watches.length - 1];
				}
			}
		}
	}

	#getBellText(bells) {
		switch (bells) {
			case 1:
				return 'One bell';
			case 2:
				return 'Two bells';
			case 3:
				return 'Three bells';
			case 4:
				return 'Four bells';
			case 5:
				return 'Five bells';
			case 6:
				return 'Six bells';
			case 7:
				return 'Seven bells';
			case 8:
				return 'Eight bells';
			default:
				return '';
		}
	}
}
