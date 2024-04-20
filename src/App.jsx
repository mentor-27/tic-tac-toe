import { Field } from './components/Field/Field';
import { RESET } from './actions';
import styles from './App.module.css';
import { useDispatch } from 'react-redux';

export default function App() {
	const dispatch = useDispatch();

	return (
		<div className={styles.app}>
			<Field />
			<button onClick={() => dispatch(RESET)} className={styles.restartButton}>
				RESTART
			</button>
		</div>
	);
}
