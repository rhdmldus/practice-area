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
// const students = [
//     {id : 1, name : "Timothy", age : 34},
//     {id : 2, name : "John", age : 23},
//     {id : 3, name : "Peter", age : 20},
//     {id : 4, name : "Nathaniel", age : 31},
//     {id : 5, name : "Philips", age : 36}
// ];
// const result1 = students.filter(student => student.name.indexOf('t') > -1)
// const result2 = students.filter(function(student){
//     return student.age < 30
// })
// console.log(result2)

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var numbers2 = numbers.map(number => number * 2)
// console.log(numbers2)

// const students = [
//         {id : 1, name : "Timothy", age : 34},
//         {id : 2, name : "John", age : 23},
//         {id : 3, name : "Peter", age : 20},
//         {id : 4, name : "Simon", age : 31},
//         {id : 5, name : "Philips", age : 36}
//     ];
// const mappingName = students.map(student => student.name)
// const multiplyReverse = students.map(student => student.id * 10).reverse()
// console.log(multiplyReverse)

// var numbers = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
// var result = numbers.map(number1 => number1.map(number2 => number2 * 2)) 
// console.log(result)

// console.log(numbers[0].indexOf(3,3))

// let set = new Set();
// set.add(1);
// set.add(2);
// console.log(set)
// let arr = [1,2,2,3,4,5]
// let set1 = new Set(arr)
// console.log(set1.has(1))

// make a sting out of an array

// const fruits = ['apple', 'banana', 'mango', 'strawberry']
// const result1 = fruits.join('|');
// const result2 = fruits.toString();
// console.log(result1)
// console.log(result2)

// make an array out of a stirng

// const fruits = 'apple, banana, mango, strawberry';
// const result = fruits.split(',', 3)
// console.log(result)

// make this array look like this: [5, 4, 3, 2, 1]
// const number = [1, 2, 3, 4, 5]
// console.log(number.reverse())
// make new array without the first two elements
// const number = [1, 2, 3, 4, 5]
// console.log(number.slice(2, 5))
// console.log(number.splice(0, 2))
// console.log(number.slice(2,5))
// console.log(number)
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45,),
    new Student('B', 28, false, 80,),
    new Student('C', 30, true, 90,),
    new Student('D', 40, false, 66,),
    new Student('E', 18, true, 88,)
    ];

    // find a student with the score 90

    // console.log(students.find(student => student.score === 90))
    // let result = students.find(function(student, index) {
    //     return student.score === 90;
    // }) 
    // console.log(result)

// make an array of enrolled students
// const result = students.filter(function(student){
//     return student.enrolled === true
// })
// const result2 = students.filter(student => student.enrolled === true)
// console.log(result2)

// make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// console.log(students.map(student => student.score))

//check if there is a student with the score lower than 50
// const result1 = students.some(student => student.score < 50)
// console.log(result1)

//compute students' average score
// const result = students.reduce((prev, curr) => prev + curr.score, 0)
// console.log(result / students.length)

//make a string containing all the scores
//result should be : '45, 80, 90, 66, 88'
// console.log(students.map(student => student.score))

//do Q10 sorted in ascending order
//result should be: '45, 66, 80, 80, 88, 90'
console.log(students.map(student => student.score).sort((a, b) => b - a).join())
