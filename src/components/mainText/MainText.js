import { Component } from 'react';
import './mainText.css';

export default class MainText extends Component {
	render() {
		return (
			<div className="mainText">
				<p>{this.props.text}</p>
			</div>
		);
	}
}
