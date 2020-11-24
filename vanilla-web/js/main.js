// GOBALS
var NUM1;
var NUM2;
var OPERATOR;
var HISTORY = [];

// HELPER FUNCTIONS
const getTextContent = node => node.textContent,
    setTextContent = (node, value) => node.textContent = value,
    appendChar = (left, right) => left.concat(right),
    calculate = () => {
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
    },
    reset = () => {
        NUM2 = undefined;
        OPERATOR = undefined;
    };

// UPDATE FUNCTIONS
const updateNumbers = (value) => !!OPERATOR ? NUM2 = parseFloat(value) : NUM1 = parseFloat(value),
    updateHistory = result => {
        return HISTORY.unshift({
            num1: NUM1,
            num2: NUM2,
            operator: OPERATOR,
            result
        })
    };

// HANDLER FUNCTIONS
const switchHandler = (action, value) => {
    const screen = document.querySelector('.calculator-screen');
    let screenValue = getTextContent(screen);

    switch (action) {
        case 'clear':
            reset();
            setTextContent(screen, 0);
            break;

        case 'operator':
            if (!OPERATOR) {
                setTextContent(screen, 0);
            }

            OPERATOR = value;
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
            const result = calculate();

            setTextContent(screen, result);
            updateHistory(result);
            reset(screen);
            updateNumbers(result);
            break;

        case 'h':
            var history = document.querySelector('.history');

            history.innerHTML = "";

            HISTORY.forEach(item => {
                let operation = Object.assign(document.createElement('p'),{
                    textContent: `${item.num1} ${item.operator} ${item.num2} = ${item.result}`
                });
                history.appendChild(operation);
            });

            break;

        case 'dark-mode-toggle':
            const darkMode = 'dark';

            let calculatorClassList = document.querySelector('body').classList;

            calculatorClassList.contains(darkMode) ?
                calculatorClassList.remove(darkMode) : calculatorClassList.add(darkMode);
            break;

        case 'num':
            screenValue = screenValue != 0 ? appendChar(screenValue, value) : value;

            setTextContent(screen, screenValue);
            updateNumbers(screenValue);
            break;
    }
},
    clickHandler = event => {
        const action = event.target.attributes['data-action'].textContent;
        const buttonValue = event.target.textContent;

        switchHandler(action, buttonValue);
    },
    keydownHandler = event => {
        const VALUE_TO_ACTION = {
            '1': 'num',
            '2': 'num',
            '3': 'num',
            '4': 'num',
            '5': 'num',
            '6': 'num',
            '7': 'num',
            '8': 'num',
            '9': 'num',
            '0': 'num',
            '+': 'operator',
            '-': 'operator',
            'x': 'operator',
            '/': 'operator',
            '%': 'operator',
            'c': 'clear',
            '.': 'decimal',
            'Enter': 'total'
        };
        const keyValue = event.key;
        const action = VALUE_TO_ACTION[keyValue];

        switchHandler(action, keyValue);
    };


// INIT FUNCTIONS
document.addEventListener('keydown', keydownHandler);
document.querySelectorAll('[data-action]')
    .forEach(button => { button.addEventListener('click', clickHandler); });
