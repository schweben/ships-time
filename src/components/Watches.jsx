import { useState, useEffect } from 'react';
import { getCurrentWatch, getWatches } from '../service/timeService';
import styles from '../styles/watches.module.css';

export default function Watches() {
	const [currentWatch, setCurrentWatch] = useState();

	useEffect(() => {
		var timer = setInterval(() => setCurrentWatch(getCurrentWatch(new Date())), 1000);

		return function cleanup() {
			clearInterval(timer);
		}
	});

	function getCurrentWatchClass(watch) {
		if (currentWatch == null) {
			return '';
		}

		return currentWatch.name === watch.name ? styles.currentWatch : '';
	}

	function formatHour(hour) {
		let formatted = '';
		if (hour < 10) {
			formatted = '0';
		}
		return formatted + hour + ':00';
	}

	return (
		<div className={styles.watchTable}>
			<table>
				<thead>
					<tr>
						<th>Watch</th>
						<th>Times</th>
					</tr>
				</thead>
				<tbody>
				{getWatches().map(function(watch, index) {
					return (
						<tr key={index} className={getCurrentWatchClass(watch)}>
							<td>{watch.name}</td>
							<td>{formatHour(watch.startHour)} - {formatHour(watch.endHour)}</td>
						</tr>
					)
				})}
				</tbody>
			</table>
		</div>
	);
}
