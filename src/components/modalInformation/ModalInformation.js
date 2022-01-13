import { Component } from 'react';
import './modalInformation.css';
import { Link } from 'react-router-dom';

export default class ModalInformation extends Component {
	show = () => {
		this.props.changeShow(false);
	};

	render() {
		console.log(this.props.changeShow);
		if (!this.props.show) {
			document.body.style.overflowY = 'scroll';
			return null;
		}
		if (this.props.show) {
			document.body.style.overflowY = 'hidden';
		}
		return (
			<>
				<div className="infoModalOverlay"></div>
				<div className="infoModal">
					<div className="infoModalClose">
						<button onClick={this.show}>&times;</button>
					</div>
					<div className="infoModalHeader">
						<span>Thank you for your trust</span>
					</div>

					<div className="infoModalButtons">
						<Link to="/cart">
							<button>View Cart</button>
						</Link>

						<button> Check Out</button>
					</div>
				</div>
			</>
		);
	}
}
