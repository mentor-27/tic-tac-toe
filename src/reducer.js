const initialState = {
	field: new Array(9).fill(''),
	currentPlayer: 'X',
	gameOver: false,
	isDraw: false,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'X':
		case 'O':
			return {
				...state,
				field: state.field.with(payload, type),
			};
		case 'CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: payload,
			};
		case 'DRAW':
			return {
				...state,
				isDraw: true,
			};
		case 'GAME_OVER':
			return {
				...state,
				gameOver: true,
			};
		case 'RESET':
			return initialState;
		default:
			return state;
	}
};
