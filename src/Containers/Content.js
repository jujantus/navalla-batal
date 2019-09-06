import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from '../Pages/Game';
import Account from '../Pages/Account';
import Leaderboard from '../Pages/Leaderboard';

export default class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			culo: 'culo'
		};
	}

	render() {
		return (
			<Switch>
				<Route exact path="/" component={Game} />
				<Route path="/account" component={Account} />
				<Route path="/leaderboard" component={Leaderboard} />
			</Switch>
		);
	}
}
