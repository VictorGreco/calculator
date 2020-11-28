import React from 'react';
import './CalculatorScreen.css';


interface Props {
    children: string;
}

function CalculatorScreen({...props}: Props): JSX.Element {

    return (
        <div className="calculator-screen">{ props.children }</div>
    )
}

export default CalculatorScreen;

