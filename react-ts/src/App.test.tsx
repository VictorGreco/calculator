import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Initialize app test', () => {
  beforeEach(() => {
    render(<App />);
  })

  test('Calculator renders with correct structure', () => {
    const calculator = document.querySelector('.calculator');
    const calculatorScreen = calculator?.querySelector('.calculator-screen');
    const calculatorBody = calculator?.querySelector('.calculator-body');
    const calculatorBodyButtons = calculatorBody?.querySelectorAll('button');
    const historyWrapper  = calculator?.querySelector('.history');
    const modeToggler  = calculator?.querySelector('.nav-bar input[data-action="dark-mode-toggle"]');
    const historyButton  = calculator?.querySelector('.nav-bar button[data-action="h"]');

    expect(calculator).toBeDefined();
    expect(calculatorScreen).toBeDefined();
    expect(calculatorBody).toBeDefined();
    expect(historyWrapper).toBeDefined();
    expect(modeToggler).toBeDefined();
    expect(historyButton).toBeDefined();
    expect(calculatorBodyButtons?.length).toEqual(19);
  });
})






