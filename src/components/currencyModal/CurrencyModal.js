import { Component } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import './currencyModal.css';

export default class CurrencyModal extends Component {
	render() {
		if (!this.props.currency) {
			return null;
		}
		return (
			<div className="currencyModal">
				<div>{getSymbolFromCurrency('USD')} USD</div>
				<div>{getSymbolFromCurrency('EUR')} EUR</div>
				<div>{getSymbolFromCurrency('JPY')} JPY</div>
			</div>
		);
	}
}
