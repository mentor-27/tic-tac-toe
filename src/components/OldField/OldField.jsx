import { Component } from 'react';
import { checkWinner } from '../../utils/utils';
import { store } from '../../store';
import { connect } from 'react-redux';
import { setPlayer, setField, GAME_OVER, DRAW } from '../../actions';
import {
	selectField,
	selectCurrentPlayer,
	selectGameOver,
	selectIsDraw,
} from '../../selectors';
import styles from './Field.module.css';

class OldFieldContainer extends Component {
	handleClick = e => {
		const { gameOver, isDraw, currentPlayer, dispatch } = this.props;
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

	updateSign = () => {
		this.statusSign = this.props.isDraw
			? 'Ничья'
			: this.props.gameOver
				? `Победа: ${this.props.currentPlayer}`
				: `Ходит: ${this.props.currentPlayer}`;
	};

	render() {
		this.updateSign();

		return (
			<>
				<div className={styles.infoBlock}>{this.statusSign}</div>
				<div className={styles.fieldBlock}>
					{this.props.field.map((item, index) => (
						<div
							key={`${index}_${Date.now()}`}
							onClick={this.handleClick}
							className={styles.col}
							data-pos={index}
						>
							{item}
						</div>
					))}
				</div>
			</>
		);
	}
}

const mapStateToProps = store => ({
	field: selectField(store),
	currentPlayer: selectCurrentPlayer(store),
	gameOver: selectGameOver(store),
	isDraw: selectIsDraw(store),
});

export const OldField = connect(mapStateToProps)(OldFieldContainer);
