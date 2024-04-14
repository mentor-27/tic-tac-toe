const initialState = new Array(9).fill('');

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'X':
		case 'O':
			return state.with(action.payload, action.type);
		case 'RESET':
			return initialState;
		default:
			return state;
	}
};
