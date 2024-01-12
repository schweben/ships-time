import { useState, useEffect, useRef } from 'react';
import TimeService from '../service/TimeService';
import styles from '../styles/currentwatch.module.css';

export default function CurrentWatch() {
	const [time, setTime] = useState(new Date());
	const shipsTime = useRef();

	const timeService = new TimeService();

	useEffect(() => {
		var timer = setInterval(() => {
			let date = new Date();
			setTime(date);
			shipsTime.current = timeService.getShipsTime(date);
		}, 1000);

		return function cleanup() {
			clearInterval(timer);
		}
	});

	return (
		<div className={styles.time}>
			<h2>{shipsTime.current}</h2>
			<h2>{time.toLocaleTimeString()}</h2>
		</div>
	);
}
