import React from 'react';
import { render } from '@testing-library/react';
import CalculatorBody from './CalculatorBody';

describe('Initialize button test', () => {

    beforeEach(() => {
        render(<CalculatorBody/>);
    })


    test('Button renders with correct params', () => {
        const buttons = document.querySelectorAll('button');

        expect(buttons?.length).toEqual(19);
    });
})