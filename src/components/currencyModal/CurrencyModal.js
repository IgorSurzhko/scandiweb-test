import { Component } from 'react';
import './currencyModal.css';
import ProductContext from '../../utils/productContext';

export default class CurrencyModal extends Component {
	static contextType = ProductContext;

	onClickHandler = idx => {
		this.props.clickHandler(idx);
		const { setCurrencyIndex } = this.context;
		setCurrencyIndex(idx);
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
