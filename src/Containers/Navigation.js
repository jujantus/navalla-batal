import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';

const Navigation = (props) => {
	return (
		<div className="Navbar">
			<Button>
				<Link to="/">PLAY</Link>
			</Button>
			<Link to="/leaderboard">LEADERBOARD</Link>
			<Link to="/account">ACCOUNT</Link>
		</div>
	);
};

export default Navigation;
