import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			culo: 'culo'
		};
	}

	render() {
		return (
			<div className="Navbar">
				<Link to="/">PLAY</Link>
				<Link to="/leaderboard">LEADERBOARD</Link>
				<Link to="/account">ACCOUNT</Link>
			</div>
		);
	}
}
