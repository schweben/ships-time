import { useState, useEffect, useRef } from 'react';
import { getShipsTime, getBells } from '../service/TimeService';
import styles from '../styles/currentwatch.module.css';
import singleDing from '../audio/single_ding.wav';
import doubleDing from '../audio/double_ding.wav';

export default function CurrentWatch() {
	const DING_INTERVAL = 500;

	const [time, setTime] = useState(new Date());
	const shipsTime = useRef();
	const singleDingAudio = useRef();
	const doubleDingAudio = useRef();
	const lastRungMins = useRef();

	useEffect(() => {
		const timer = setInterval(() => {
			let date = new Date();
			setTime(date);
			shipsTime.current = getShipsTime(date);
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
		const numBells = getBells(new Date())

		// Calculate the number of double-rings required
		const iterations = Math.floor(numBells / 2);

		// Multiply audio length by 1000 to get duration in ms
		const duration = doubleDingAudio.current.duration * 1000;

		console.log(`Ringing ${numBells} bells`);
		// Iterate over the double dings
		for (let i = 0; i < iterations; i++) {

			// Pause in between repetitions
			const pause = (duration + DING_INTERVAL) * i;
			setTimeout(() => {
				doubleDingAudio.current.play();
			}, pause);
		}

		// Now calculate if a single ding is required
		if (numBells % 2 > 0) {
			// Wait for the double dings to complete
			const pause = (duration + DING_INTERVAL) * iterations;
			setTimeout(() => {
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
