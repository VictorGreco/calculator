import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Initialize button test', () => {
    const mockButtonParams = {
        children: '+', 
        action: 'operator',
        className: 'grey'
    };
    const mockButtonMissingParams = {
        children: '+'
    };

    test('Button renders with correct params', () => {
        render(<Button {...mockButtonParams}/>);

        const button = document.querySelector('button');

        expect(button).toHaveAttribute('class');
        expect(button?.getAttribute('class')).toEqual('grey');
        expect(button).toHaveAttribute('data-action');
        expect(button?.getAttribute('data-action')).toEqual('operator');
        expect(button?.textContent).toEqual(' + ');
    });

    test('Button renders with missing params', () => {
        render(<Button {...mockButtonMissingParams}/>);

        const button = document.querySelector('button');

        expect(button?.getAttribute('class')).toBeNull();
        expect(button?.textContent).toEqual(' + ');
    });

    test('Firing click event', () => {
        const {asFragment} = render(<Button {...mockButtonParams}/>);
        const fireClick = asFragment();

    })
})






