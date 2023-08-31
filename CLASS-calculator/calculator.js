class Calculator {
  constructor($previousOperandTextElement, $currentOperandTextElement) {
    this.$previousOperandTextElement = $previousOperandTextElement;
    this.$currentOperandTextElement = $currentOperandTextElement;
    this.clear();
  }

  //delete all on display
  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  //delete one number/operation on display
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1); //convert to string, and delete the last number
  }

  appendNumber(number) {
    //allow '.' only once
    if (number === '.' && this.currentOperand.includes('.')) return;
    //for append and not add
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  operations(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      //when there is currentOperand and previousOperand
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand; //pass the currentOperand to the previousOperand
    this.currentOperand = '';
  }

  //calculate by the chosen operation
  compute() {
    let computation; //the result
    const prev = parseFloat(this.previousOperand); //convert string to number, for compute
    const current = parseFloat(this.currentOperand); //convert string to number, for compute
    if (isNaN(prev) || isNaN(current)) return;
    //switch= an "if" chain for each operation
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break; //not continue to the other cases
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default: //=else
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  //for '.' and ','
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    //split the stringNumber to numbers before the '.' and after
    const integerDigits = parseFloat(stringNumber.split('.')[0]); //the integer number, which is before the '.'
    const decimalDigits = stringNumber.split('.')[1]; //the decimal number, which is after the '.'
    let integerDisplay; //before '.' section

    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  //show on display
  updateDisplay() {
    this.$currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.$previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.$previousOperandTextElement.innerText = '';
    }
  }
}

const $numberButtons = document.querySelectorAll('[data-number]');
const $operationButtons = document.querySelectorAll('[data-operation]');
const $equalsButton = document.querySelector('[data-equals]');
const $deleteButton = document.querySelector('[data-delete]');
const $allClearButton = document.querySelector('[data-all-clear]');
const $previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
const $currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

const calculator = new Calculator(
  $previousOperandTextElement,
  $currentOperandTextElement
);

//add numbers and show on display
$numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

//activate +-*/
$operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.operations(button.innerText); //includes compute()
    calculator.updateDisplay();
  });
});

//activate =
$equalsButton.addEventListener('click', (button) => {
  calculator.compute(); //show the result on currentOperand
  calculator.updateDisplay();
});

//activate AC
$allClearButton.addEventListener('click', (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

//activate DEL
$deleteButton.addEventListener('click', (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

/*readme:
ES6 class
constructor
DOM
data-attribute
forEach
operators
toString
parseFloat
includes
slice- to eliminate part of the string
switch, case, break, default
split- to deal with numbers before and after the '.'
toLocaleString

flex
grid
*/
