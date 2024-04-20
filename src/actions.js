export const setPlayer = player => ({ type: 'CURRENT_PLAYER', payload: player });
export const setField = (player, pos) => ({ type: player, payload: pos });
export const GAME_OVER = { type: 'GAME_OVER' };
export const DRAW = { type: 'DRAW' };
export const RESET = { type: 'RESET' };
