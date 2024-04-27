import { Component } from 'react';
import { OldField } from './components/OldField/OldField';
import { RESET } from './actions';
import { connect } from 'react-redux';
import styles from './App.module.css';

class OldAppContainer extends Component {
	render() {
		return (
			<div className={styles.app}>
				<OldField />
				<button
					className={styles.restartButton}
					onClick={() => this.props.dispatch(RESET)}
				>
					RESTART
				</button>
			</div>
		);
	}
}

export const OldApp = connect()(OldAppContainer);
