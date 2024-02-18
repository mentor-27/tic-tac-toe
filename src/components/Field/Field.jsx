import PropTypes from 'prop-types';
import { checkWinner } from '../../utils/utils';
import styles from './Field.module.css';

export const Field = props => {
	const handleClick = e => {
		if (e.target.textContent || props.isGameEnded || props.isDraw) return;
		props.currentPlayer === 'X'
			? props.setCurrentPlayer('O')
			: props.setCurrentPlayer('X');
		props.setField(prev => {
			const newField = prev.with(+e.target.dataset.pos, props.currentPlayer);
			const isWin = checkWinner(newField);
			if (isWin === 'X' || isWin === 'O') {
				props.setIsGameEnded(true);
				props.setCurrentPlayer(isWin);
			} else if (isWin === 'draw') props.setIsDraw(true);
			return newField;
		});
	};
	return <FieldLayout field={props.field} clickHandler={handleClick} />;
};

const FieldLayout = props => {
	return (
		<div className={styles.fieldBlock}>
			{props.field.map((item, index) => (
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
