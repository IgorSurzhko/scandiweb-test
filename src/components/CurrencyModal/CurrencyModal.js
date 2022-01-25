import { Component } from 'react';

import ProductContext from '../../utils/productContext';

import './CurrencyModal.css';

export default class CurrencyModal extends Component {
	static contextType = ProductContext;

	onClickHandler = idx => {
		this.props.clickHandler(idx);
		const { setCurrencyIndex } = this.context;
		setCurrencyIndex(idx);
		this.props.onShow();
	};

	render() {
		if (!this.props.currency) {
			return null;
		}
		return (
			<>
				<div className="currencyModalOverlay" onClick={this.props.onShow}></div>
				<div className="currencyModal">
					{this.props.curr.map((elem, idx) => (
						<div
							key={elem.label}
							onClick={e => {
								this.onClickHandler(idx);
							}}>{`${elem.symbol} ${elem.label}`}</div>
					))}
				</div>
			</>
		);
	}
}
