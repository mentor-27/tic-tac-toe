import PropTypes from 'prop-types';
import { checkWinner } from '../../utils/utils';
import { store } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayer, setField, GAME_OVER, DRAW } from '../../actions';
import {
	selectField,
	selectCurrentPlayer,
	selectGameOver,
	selectIsDraw,
} from '../../selectors';
import styles from './Field.module.css';

export const Field = () => {
	const dispatch = useDispatch();
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const gameOver = useSelector(selectGameOver);
	const isDraw = useSelector(selectIsDraw);

	const handleClick = e => {
		if (e.target.textContent || gameOver || isDraw) return;
		currentPlayer === 'X' ? dispatch(setPlayer('O')) : dispatch(setPlayer('X'));
		dispatch(setField(currentPlayer, +e.target.dataset.pos));

		const isWin = checkWinner(store.getState().field);

		if (isWin === currentPlayer) {
			dispatch(setPlayer(isWin));
			dispatch(GAME_OVER);
		} else if (isWin === 'draw') {
			dispatch(DRAW);
		}
	};

	const statusSign = isDraw
		? 'Ничья'
		: gameOver
			? `Победа: ${currentPlayer}`
			: `Ходит: ${currentPlayer}`;

	return <FieldLayout field={field} statusSign={statusSign} clickHandler={handleClick} />;
};

const FieldLayout = ({ field, statusSign, clickHandler }) => {
	return (
		<>
			<div className={styles.infoBlock}>{statusSign}</div>
			<div className={styles.fieldBlock}>
				{field.map((item, index) => (
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
