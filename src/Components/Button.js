import React from 'react';

const Button = (props) => (
	<div className="NavButton" onClick={props.onClick}>
		{props.children}
	</div>
);

export default Button;
