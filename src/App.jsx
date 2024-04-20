import { Field } from './components/Field/Field';
import { store } from './store';
import { RESET } from './actions';
import styles from './App.module.css';

export default function App() {
	return (
		<div className={styles.app}>
			<Field />
			<button onClick={() => store.dispatch(RESET)} className={styles.restartButton}>
				RESTART
			</button>
		</div>
	);
}
