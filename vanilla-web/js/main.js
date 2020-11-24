// GOBALS
var NUM1;
var NUM2;
var OPERATOR;

// HELPER FUNCTIONS
const getTextContent = node => node.textContent;
const setTextContent = (node, value) => node.textContent = value;
const appendChar = (left, right) => left.concat(right);
const updateNumbers = value => !!OPERATOR ? NUM2 = parseFloat(value) : NUM1 = parseFloat(value);
const calculate = () => {
    switch (OPERATOR) {
        case '%':
            return NUM1 / 100 * NUM2;
        case '/':
            return NUM1 / NUM2;
        case 'x':
            return NUM1 * NUM2;
        case '-':
            return NUM1 - NUM2;
        case '+':
            return NUM1 + NUM2;

        default:
            throw 'Operator not selected, nice  try ;)';
    }
}


const clickHandler = event => {
    const action = event.target.attributes['data-action'].textContent;
    const buttonValue = event.target.textContent;
    const screen = document.querySelector('.calculator-screen');
    let screenValue = getTextContent(screen);

    switch (action) {
        case 'clear':
            setTextContent(screen, 0);
            NUM1 = undefined;
            NUM2 = undefined;
            OPERATOR = undefined;
            break;

        case 'operator':
            if (!OPERATOR) {
                setTextContent(screen, 0);
            }

            OPERATOR = buttonValue;
            break;

        case 'toggle-sign':
            screenValue = screenValue.indexOf('-') >= 0 ? screenValue.replace('-', '') : appendChar('-', screenValue);

            setTextContent(screen, screenValue);
            updateNumbers(screenValue);
            break;

        case 'decimal':
            if (screenValue.indexOf('.') == -1) {
                screenValue = appendChar(screenValue, '.');

                setTextContent(screen, screenValue);
                updateNumbers(screenValue);
            }
            break;

        case 'total':
            setTextContent(screen, calculate());
            break;

        default:
            screenValue = screenValue != 0 ? appendChar(screenValue, buttonValue) : buttonValue;

            setTextContent(screen, screenValue);
            updateNumbers(screenValue);
            break;
    }
}

document.querySelector('.calculator-toggle-mode input').addEventListener('click', event => {
    let calculatorClassList = document.querySelector('body').classList;
    const darkMode = 'dark';

    if (calculatorClassList.contains(darkMode)) {
        calculatorClassList.remove(darkMode);
    } else {
        calculatorClassList.add(darkMode);
    }
});

document.querySelectorAll('button[data-action]')
    .forEach(button => { button.addEventListener('click', clickHandler); });