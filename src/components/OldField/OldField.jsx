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
				<div className="flex flex-col justify-center h-1/6 w-full text-5xl leading-8 text-center font-semibold text-ttl-txt-col items-center">
					{this.statusSign}
				</div>
				<div className="flex h-3/4 w-full bg-none content-center items-center flex-wrap justify-center gap-10px">
					{this.props.field.map((item, index) => (
						<div
							key={`${index}_${Date.now()}`}
							onClick={this.handleClick}
							className="flex items-center justify-center w-col-size aspect-square text-8xl font-mono text-white bg-gradient-to-b from-bg-top to-bg-btm border border-brd-col rounded-lg shadow-col-shadow hover:brightness-125 active:shadow-col-act-shd duration-200 select-none cursor-pointer"
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
