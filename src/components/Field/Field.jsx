import PropTypes from 'prop-types';
import { checkWinner } from '../../utils/utils';
import { store } from '../../store';
import { useSelector } from 'react-redux';
import { setPlayer, GAME_OVER, DRAW } from '../../actions';
import styles from './Field.module.css';

export const Field = () => {
	const currentPlayer = useSelector(store => store.currentPlayer);
	const gameOver = useSelector(store => store.gameOver);
	const isDraw = useSelector(store => store.isDraw);

	const handleClick = e => {
		if (e.target.textContent || gameOver || isDraw) return;

		currentPlayer === 'X'
			? store.dispatch(setPlayer('O'))
			: store.dispatch(setPlayer('X'));

		store.dispatch({ type: currentPlayer, payload: +e.target.dataset.pos });

		const isWin = checkWinner(store.getState().field);

		if (isWin === currentPlayer) {
			store.dispatch(GAME_OVER);
			store.dispatch(setPlayer(isWin));
		} else if (isWin === 'draw') {
			store.dispatch(DRAW);
		}
	};

	const statusSign = isDraw
		? 'Ничья'
		: gameOver
			? `Победа: ${currentPlayer}`
			: `Ходит: ${currentPlayer}`;

	return <FieldLayout statusSign={statusSign} clickHandler={handleClick} />;
};

const FieldLayout = ({ statusSign, clickHandler }) => {
	return (
		<>
			<div className={styles.infoBlock}>{statusSign}</div>
			<div className={styles.fieldBlock}>
				{store.getState().field.map((item, index) => (
					<div
						key={`${index}_${Date.now()}`}
						onClick={clickHandler}
						className={styles.col}
						data-pos={index}
					>
						{item}
					</div>
				))}
			</div>
		</>
	);
};

FieldLayout.propTypes = {
	statusSign: PropTypes.string,
	clickHandler: PropTypes.func,
};
