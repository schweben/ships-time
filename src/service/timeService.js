import { Watch } from '../domain/watch';

const watches = [
	new Watch('First Watch', 20, 0),
	new Watch('Middle Watch', 0, 4),
	new Watch('Morning Watch', 4, 8),
	new Watch('Forenoon Watch', 8, 12),
	new Watch('Afternoon Watch', 12, 16),
	new Watch('First Dog Watch', 16, 18),
	new Watch('Second Dog Watch', 18, 20),
];

export const getWatches = () => watches;

export const getShipsTime = currentTime => {
	const time = new Date(currentTime.getTime());
	let watch = getCurrentWatch(time);
	let bells;
	try {
		bells = watch.getBells(time);
	} catch (Error) {
		watch = getPreviousWatch(watch);
		bells = watch.getBells(time);
	}

	const bellText = getBellText(bells);

	return `${bellText} of the ${watch.name}`;
}

export const getBells = currentTime => {
	const time = new Date(currentTime.getTime());
	try {
		return getCurrentWatch(time).getBells(time);
	} catch (error) {
		return getPreviousWatch(getCurrentWatch(time)).getBells(time);
	}
}

export const getCurrentWatch = time => watches.find(watch => watch.isTimeInWatch(time));

const getPreviousWatch = currentWatch => {
	for (let i = 0; i < watches.length; i++) {
		if (watches[i] === currentWatch) {
			if (i > 0) {
				return watches[i - 1];
			} else {
				return watches[watches.length - 1];
			}
		}
	}
}

const getBellText = bells => {
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
