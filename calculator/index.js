'use strict'
let buttons = document.querySelectorAll('button') 
let input = document.querySelector('input') 

let result = "";
function init(){
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            switch (button.dataset.type){
                case "operator":
                    const oper = button.innerText;
                    operator(oper);
                    break;
                case "ac":
                    clear();
                    break;
                case "enter":
                    calc();
                    break;
                default:
                    const number = button.innerText;
                    displayNumber(number);
                    break;
            }
        })
    })
}

function displayNumber(number){
    const current = input.value;
    input.value = current === '0' ? number : input.value = number;
}
function clear() {

}
function operator(oper){
    result += oper;
}
function calc(){

}