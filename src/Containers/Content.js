import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Game from '../Pages/Game';
import Account from '../Pages/Account';
import Leaderboard from '../Pages/Leaderboard';

const Content = (props) => {
	//STATE
	const [ user, setUser ] = useState({});

	const loggedIn = user && user.loggedIn;

	return (
		<Switch>
			<Route exact path="/" render={() => (loggedIn ? <Game /> : <Redirect to="/account" />)} />

			<Route path="/account" render={() => <Account loggedIn={loggedIn} user={user} setUser={setUser} />} />

			<Route path="/leaderboard" render={() => (loggedIn ? <Leaderboard /> : <Redirect to="/account" />)} />
		</Switch>
	);
};

export default Content;
