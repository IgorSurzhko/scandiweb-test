import React from 'react';
import spinner from '../../assets/spinner.gif';

export default function Spinner() {
	return (
		<div>
			<img
				src={spinner}
				style={{ width: '50px', margin: '300px auto', display: 'block' }}
				alt="Loading..."
			/>
		</div>
	);
}
