import PropTypes from 'prop-types';
import { checkWinner } from '../../utils/utils';
import { store } from '../../store';
import styles from './Field.module.css';

export const Field = props => {
	const handleClick = e => {
		if (e.target.textContent || props.isGameEnded || props.isDraw) return;
		props.currentPlayer === 'X'
			? props.setCurrentPlayer('O')
			: props.setCurrentPlayer('X');
		store.dispatch({ type: props.currentPlayer, payload: +e.target.dataset.pos });
		const isWin = checkWinner(store.getState());
		if (isWin === 'X' || isWin === 'O') {
			props.setIsGameEnded(true);
			props.setCurrentPlayer(isWin);
		} else if (isWin === 'draw') props.setIsDraw(true);
	};
	return <FieldLayout field={props.field} clickHandler={handleClick} />;
};

const FieldLayout = props => {
	return (
		<div className={styles.fieldBlock}>
			{store.getState().map((item, index) => (
				<div
					key={`${index}_${Date.now()}`}
					onClick={props.clickHandler}
					className={styles.col}
					data-pos={index}
				>
					{item}
				</div>
			))}
		</div>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	clickHandler: PropTypes.func,
};
