import { useState, useEffect, useRef } from 'react';
import TimeService from '../service/TimeService';
import styles from '../styles/currentwatch.module.css';
import singleDing from '../audio/single_ding.wav';
import doubleDing from '../audio/double_ding.wav';

export default function CurrentWatch() {
	const [time, setTime] = useState(new Date());
	const shipsTime = useRef();
	const singleDingAudio = useRef();
	const doubleDingAudio = useRef();
	const lastRungMins = useRef();

	const timeService = new TimeService();


	useEffect(() => {
		const timer = setInterval(() => {
			let date = new Date();
			setTime(date);
			shipsTime.current = timeService.getShipsTime(date);
			if ((date.getMinutes() === 0 || date.getMinutes() === 30) && lastRungMins.current !== date.getMinutes()) {
				playBells();
				lastRungMins.current = date.getMinutes();
			}
		}, 1000);

		return function cleanup() {
			clearInterval(timer);
		}
	});

	function playBells() {
		const numBells = timeService.getBells(new Date())

		// Calculate the number of double-rings required
		const iterations = Math.floor(numBells / 2);

		// Multiply audio length by 1000 to get duration in ms
		const duration = doubleDingAudio.current.duration * 1000;
		const interval = 500;

		console.log(`Ringing ${numBells} bells with ${iterations} iterations`);
		// Iterate over the double dings
		for (let i = 0; i < iterations; i++) {

			// Pause in between repetitions
			const pause = (duration + interval) * i;
			setTimeout(() => {
				console.log(`${i} Ding Ding`);
				doubleDingAudio.current.play();
			}, pause);
		}

		// Now calculate if a single ding is required
		if (numBells % 2 > 0) {
			// Wait for the double dings to complete
			const pause = (duration + interval) * iterations;
			setTimeout(() => {
				console.log('Ding');
				singleDingAudio.current.play();
			}, pause);
		}
	}

	return (
		<div className={styles.time}>
			<h2>{shipsTime.current}</h2>
			<h2>{time.toLocaleTimeString()}</h2>
			<button onClick={playBells}>Ring bells</button>
			<div>
				<audio ref={singleDingAudio}>
					<source src={singleDing}></source>
				</audio>
				<audio ref={doubleDingAudio}>
					<source src={doubleDing}></source>
				</audio>
			</div>
		</div>
	);
}
