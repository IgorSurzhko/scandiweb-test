import { Component } from 'react';
import './errorBoundary.css';

export default class ErrorBoundary extends Component {
	state = { hasError: false, errorMsg: '', errorInfo: '' };
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}
	componentDidCatch(error, errorInfo) {
		this.setState({ errorMsg: error, errorInfo: errorInfo });
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="error">
					<div>
						<div className="centered">
							<span className="inverted">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</span>
							&nbsp;
						</div>

						<div className="centered">
							<span className="inverted">&nbsp;E&nbsp;R&nbsp;R&nbsp;O&nbsp;R&nbsp;</span>
							<span className="shadow">&nbsp;</span>
						</div>
						<div className="centered">
							<span className="inverted">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</span>
							<span className="shadow">&nbsp;</span>
						</div>
						<div className="centered">
							&nbsp;
							<span className="shadow">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</span>
						</div>
						<div div className="row">
							Please make a screenshot with a couple of words about this error (when? why? and what do you
							think about Chinese dragons? ), and send it to surzhko.igor@gmail.com
						</div>
						<div div className="row">
							I will do my best to fix it as soon as 1 2 3
						</div>
						<h2>{this.state.errorMsg.message}</h2>
						<h3>{this.state.errorMsg.stack}</h3>
						<h4>{this.state.errorInfo.componentStack}</h4>
						<div className="row">&nbsp;</div>
						<div className="row">A fatal exception has occurred at C0DE:ABAD1DEA in 0xC0DEBA5E.</div>
						<div className="row">The current request will be terminated.</div>
						<div className="row">&nbsp;</div>
						<div className="row">* Press any key to return to the previous page.</div>
						<div className="row">* Press CTRL+ALT+DEL to restart your computer. You will</div>
						<div className="row">&nbsp;&nbsp;lose any unsaved information in all applications.</div>
						<div className="row">&nbsp;</div>
						<div className="centered">
							Press any key to continue...<span className="blink">&#9608;</span>
						</div>
					</div>
				</div>
			);
		}
		return this.props.children;
	}
}
