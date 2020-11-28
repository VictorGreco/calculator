import React from 'react';
import './Button.css';

interface ButtonProps {
	className: string;
	action: string;
	children: string;
}

function Button({children, action, className}: ButtonProps): JSX.Element {
	return(
		<button className={className} data-action={action} > {children} </button>
	)
}

export default Button;

