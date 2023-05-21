let firstNumber = '';
let secondNumber = '';
let operator = '';

const display = document.querySelector('.display');
const buttons  = document.querySelectorAll('.buttonsContainer > button'); 
// console.log(Array.from(buttons).map(item => item.name));

function assignButtonValue(element){
    const value = element.name;
    if (value >= 0 && value <= 9){ //par cuando presiono un boton numerado
        if ((!firstNumber || firstNumber) && !operator){ //si el primer nro esta vacio o no y no hay operador, almacena lo presionado en primer nro
            firstNumber += value;
        }
        else if (operator && firstNumber){ //si hay operador, guardar cosas en secondvalue
            secondNumber+= value;
        }
        displayCurrentValue();
    }
    else if (value === '+' || value === '-' || value === '*' || value === '/'){
        if (firstNumber !== '' && operator !== '' && secondNumber !== ''){
            firstNumber = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber)).toFixed(2);
            if (firstNumber % 1 === 0){
                firstNumber = parseInt(firstNumber);
            }
            operator = value;
            secondNumber = '';
            displayCurrentValue();
        }
        operator = value;
        displayCurrentValue();
    }
    if (value === '='){
        if (firstNumber !== '' && operator !== '' && secondNumber !== ''){
            firstNumber = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber)).toFixed(2);
            if (firstNumber % 1 === 0){
                firstNumber = parseInt(firstNumber);
            }
            operator = '';
            secondNumber = '';
            displayCurrentValue();
        }
    }
    if (value === 'deleteNumber'){
        if (!operator){
            firstNumber = firstNumber.slice(0,-1);
            displayCurrentValue();
        }
        else {
            secondNumber = secondNumber.slice(0,-1);
            displayCurrentValue();
        }
    }
}

function displayCurrentValue(){
    display.textContent = firstNumber+operator+secondNumber;
}

function clearDisplay() {
    firstNumber = '';
    operator = ''
    secondNumber = '';
    displayCurrentValue();
}


//---------------------------------------------

function operate(fn, op, sn){
    switch(op){
        case '+':
            return add(fn, sn);
            break;
        case '-':
            return subtract(fn, sn);
            break;
        case '*':
            return multiply(fn, sn);
            break;
        case '/':
            return divide(fn, sn);
            break;
    }
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return (a - b);
}

function multiply(a, b){
    return (a * b);
}

function divide(a, b){
    return b != 0 ? (a / b): 'are your dumb?' ;
}




// operate('*', 2, 2);
// operate('/', 2, 0);
// operate('+', 2, 2);
// operate('-', 2, 2);