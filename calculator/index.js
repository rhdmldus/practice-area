'use strict'
const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector('input')
const history = document.querySelector('.history')

class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement
        // this.displayContent = ''
        this.operatorCheck = true
        this.equalsCheck = false
        this.clear()
        this.history = history
    }

    appendNumber(number) {
        if(this.equalsCheck) {
            this.displayContent = number
            this.equalsCheck = false
        }
        else{
            this.displayContent += number
        }
        this.operatorCheck = false
    }

    appendOperator(operator) {
        if(this.operatorCheck) return false
        if(this.equalsCheck) this.equalsCheck = false
        this.displayContent += operator
        return this.operatorCheck = true
    }

    updateDisplay() {
        this.displayElement.value = this.displayContent
    }

    clear() {
        this.displayContent = '';
        this.displayElement.value = 0
        this.operatorCheck = true
    }

    compute() {
        if(this.operatorCheck) return
        this.displayContent = eval(this.displayContent.replace('÷','/'))
        this.equalsCheck = true
        this.history.innerText = this.displayElement.value;
        
    }

    del() {
        this.displayElement.value.slice(0, -1);
        console.log(this.displayElement.value.slice(0, -1))
        console.log('del')
    }
}


const calculator = new Calculator(displayElement)

buttons.forEach(btn => btn.addEventListener('click', () => {
    switch (btn.dataset.type) {
        case 'operator':
            if (calculator.appendOperator(btn.innerText)) {
                calculator.updateDisplay()
            }
            console.log('operator')
            break;
        case 'ac':
            calculator.clear()
            console.log('ac')
            break;
        case 'equals':
            console.log('equals')
            calculator.compute()
            calculator.updateDisplay()
            break;
        case 'del':
            calculator.del()
            break;
        default:
            console.log('number')
            calculator.appendNumber(btn.innerText)
            calculator.updateDisplay()

            break;
    }
}))
