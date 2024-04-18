import PropTypes from 'prop-types';
import { useState } from 'react';
import { Field } from './components/Field/Field';
import { store } from './store';
import styles from './App.module.css';

export default function App() {
	const [render, setRender] = useState(false);
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	let statusSign = `Ходит: ${currentPlayer}`;
	if (isDraw) statusSign = 'Ничья';
	else if (!isDraw && isGameEnded) statusSign = `Победа: ${currentPlayer}`;

	function reset() {
		store.dispatch({ type: 'RESET' });
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setRender(!render);
	}

	const props = {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		statusSign,
		reset,
	};

	return <AppLayout {...props} />;
}

function AppLayout(props) {
	return (
		<div className={styles.app}>
			<div className={styles.infoBlock}>{props.statusSign}</div>
			<Field {...props} />
			<button onClick={props.reset} className={styles.restartButton}>
				RESTART
			</button>
		</div>
	);
}

AppLayout.propTypes = {
	statusSign: PropTypes.string,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
};
