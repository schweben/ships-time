import { useState, useEffect } from 'react';
import TimeService from '../service/TimeService';
import styles from '../styles/watches.module.css';

export default function Watches() {
	const [currentWatch, setCurrentWatch] = useState();
	const timeService = new TimeService();

	useEffect(() => {
		var timer = setInterval(() => setCurrentWatch(timeService.getCurrentWatch(new Date())), 1000);

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

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Watch</th>
						<th>Times</th>
					</tr>
				</thead>
				<tbody>
				{timeService.getWatches().map(function(watch, index) {
					return (
						<tr key={index} className={getCurrentWatchClass(watch)}>
							<td>{watch.name}</td>
							<td>{watch.startHour} - {watch.endHour}</td>
						</tr>
					)
				})}
				</tbody>
			</table>
		</div>
	);
}
