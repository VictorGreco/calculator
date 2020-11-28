import React from 'react';
import Button from '../Button/Button';
import './CalculatorBody.css';

function CalculatorBody(): JSX.Element {
	const BUTTONS = [
		{
			className: 'gray',
			action: 'clear',
			children: 'C'
		},
		{
			className: 'gray',
			action: 'toggle-sign',
			children: '+ / -'
		},
		{
			className: 'gray',
			action: 'operator',
			children: '%'
		},
		{
			className: '',
			action: 'operator',
			children: '/'
		},
		{
			className: 'num',
			action: 'num',
			children: '7'
		},
		{
			className: 'num',
			action: 'num',
			children: '8'
		},
		{
			className: 'num',
			action: 'num',
			children: '9'
		},
		{
			className: '',
			action: 'operator',
			children: 'x'
		},
		{
			className: 'num',
			action: 'num',
			children: '4'
		},
		{
			className: 'num',
			action: 'num',
			children: '5'
		},
		{
			className: 'num',
			action: 'num',
			children: '6'
		},
		{
			className: '',
			action: 'operator',
			children: '-'
		},
		{
			className: 'num',
			action: 'num',
			children: '1'
		},
		{
			className: 'num',
			action: 'num',
			children: '2'
		},
		{
			className: 'num',
			action: 'num',
			children: '3'
		},
		{
			className: '',
			action: 'operator',
			children: '+'
		},
		{
			className: 'num zero',
			action: 'zero',
			children: '0'
		},
		{
			className: 'num',
			action: 'decimal',
			children: '.'
		},
		{
			className: '',
			action: 'total',
			children: '='
		}
	]

	return (
		<div className="calculator-body">
			{ BUTTONS.map((item, index) => {

				return <Button key={index} {...item}></Button>
			})}
		</div>
	)
}

export default CalculatorBody;

