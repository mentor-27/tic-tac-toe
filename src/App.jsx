import { StrictMode, useState } from 'react';
import PropTypes from 'prop-types';
import { Field, Information } from './components';
import styles from './App.module.css';

export default function App() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(new Array(9).fill(''));

	let statusSign = '';
	if (isDraw) statusSign = 'Ничья';
	else if (!isDraw && isGameEnded) statusSign = `Победа: ${currentPlayer}`;
	else if (!isDraw && !isGameEnded) statusSign = `Ходит: ${currentPlayer}`;

	function gameReset() {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(prev => [...prev].fill(''));
	}

	return (
		<StrictMode>
			<AppLayout
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				isDraw={isGameEnded}
				setIsDraw={setIsDraw}
				statusSign={statusSign}
				reset={gameReset}
			/>
		</StrictMode>
	);
}

function AppLayout(props) {
	return (
		<div className={styles.app}>
			<Information {...props} />
			<Field {...props} />
			<button onClick={props.reset} className={styles.restartButton}>
				RESTART
			</button>
		</div>
	);
}

AppLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	status: PropTypes.string,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
};
