import { Component } from 'react';
import { OldField } from './components/OldField/OldField';
import { RESET } from './actions';
import { connect } from 'react-redux';

class OldAppContainer extends Component {
	render() {
		return (
			<div className="flex flex-col justify-between items-center w-450 h-650 mx-auto my-100 py-8 px-4 rounded-2xl border border-brd-col bg-gradient-to-b from-bg-top to-bg-btm">
				<OldField />
				<button
					className="h-20 w-10/12 text-4xl font-semibold text-btn-txt-col bg-gradient-to-b from-btn-top to-btn-bottom border-none outline-0 rounded-lg shadow-btn-shadow duration-200 cursor-pointer hover:brightness-125 active:shadow-btn-act-shd"
					onClick={() => this.props.dispatch(RESET)}
				>
					RESTART
				</button>
			</div>
		);
	}
}

export const OldApp = connect()(OldAppContainer);
