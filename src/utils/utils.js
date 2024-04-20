import { WIN_PATTERNS } from './consts';

export const checkWinner = field => {
	const xWin = WIN_PATTERNS.some(winSet =>
		winSet.every(winValue => field[winValue] === 'X'),
	);
	const oWin = WIN_PATTERNS.some(winSet =>
		winSet.every(winValue => field[winValue] === 'O'),
	);
	const draw = field.every(item => item);

	if (xWin) return 'X';
	if (oWin) return 'O';
	if (draw) return 'draw';
	return null;
};
