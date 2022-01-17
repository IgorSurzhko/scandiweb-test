import { Component } from 'react';
import './currencyModal.css';
import { currencyFetch } from '../../utils/currencyFetch';

export default class CurrencyModal extends Component {
	state = { curr: [] };

	async componentDidMount() {
		let res = await currencyFetch();
		this.setState({ curr: res.data.currencies });
		console.log(res.data.currencies);
	}

	onClickHandler = e => {
		this.props.clickHandler(e.target.innerHTML);
	};

	render() {
		if (!this.props.currency) {
			return null;
		}
		return (
			<>
				<div className="currencyModalOverlay" onClick={this.props.onShow}></div>
				<div className="currencyModal">
					{this.state.curr.map(elem => (
						<div key={elem.label} onClick={this.onClickHandler}>{`${elem.symbol} ${elem.label}`}</div>
					))}
				</div>
			</>
		);
	}
}
