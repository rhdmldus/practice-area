// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// numbers.forEach((number) => {
//     sum += number;
// })
// console.log(sum)

// const letters = [ 'a', 'b', 'a', 'b', 'c', 'd', 'a']
// let count = {};

// letters.forEach(letter => {
//     if(count[letter]){
//         count[letter]++
//     }
//     else{
//         count[letter] = 1
//     }
    
// });
// console.log(count)

// const fruits = ['apple', 'banana', 'coconut', 'strawberry', 'kiwi', 'blueberry', 'cherry']
// const result = fruits.filter( fruit => fruit.length > 5)
// console.log(result)

// const numbers = [12, 23, 235, 34, 45, 1, 3, 4, 7].filter(moreThanNum)
// function moreThanNum(number){
//     return number > 20
// }

// // const result = numbers.filter(number => number > 17)
// console.log(numbers)

// function isEven(number){
//     return number % 2 == 0;
// }
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 33].filter(isEven)
// console.log(numbers)
// const fruits = ['apple', 'banana', 'coconut', 'strawberry', 'kiwi', 'blueberry', 'cherry']
// const result = fruits.filter(fruit => fruit.indexOf('a') > -1)
// const filteredFruits = (letter) => fruits.filter(fruit => fruit.indexOf(letter) > -1) 
// function filteredFruits(letter) {
//     return fruits.filter(function(fruit) {
//         return fruit.indexOf(letter) > -1
//     })
        
// }
// console.log(filteredFruits('k'))
const students = [
    {id : 1, name : "Timothy", age : 34},
    {id : 2, name : "John", age : 23},
    {id : 3, name : "Peter", age : 20},
    {id : 4, name : "Nathaniel", age : 31},
    {id : 5, name : "Philips", age : 36}
];
const result1 = students.filter(student => student.name.indexOf('t') > -1)
const result2 = students.filter(function(student){
    return student.age < 30
})
console.log(result2)
