import React, { useState } from 'react';
import Button from '../Components/Button';

const Account = (props) => {
	const [ tab, setTab ] = useState(1);
	const [ state2, setState2 ] = useState('pedo');

	let renderForm = () => (
		<React.Fragment>
			<div className="accountForm">
				<div className="tabHeaders">
					<h3 onClick={() => setTab(1)} className="tabLink">
						Login
					</h3>
					<h3 onClick={() => setTab(2)} className="tabLink">
						Register
					</h3>
				</div>

				<div className={tab === 1 ? 'tabContent' : 'tabContent hide'}>
					<div className="inputGroup">
						<input type="text" placeholder="Username" />
						<input type="password" placeholder="Password" />
						<Button>Log In</Button>
					</div>
				</div>
				<div className={tab === 2 ? 'tabContent' : 'tabContent hide'}>
					<div className="inputGroup">
						<input type="text" placeholder="Username" />
						<input type="text" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<input type="password" placeholder="Confirm password" />
						<Button>Sign In</Button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);

	let renderProfile = () => (
		<React.Fragment>
			<h1>Profile info</h1>
		</React.Fragment>
	);

	return <React.Fragment>{props.loggedIn ? renderProfile() : renderForm()}</React.Fragment>;
};

export default Account;
