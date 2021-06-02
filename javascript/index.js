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

const fruits = ['apple', 'banana', 'coconut', 'strawberry', 'kiwi', 'blueberry', 'cherry']
const result = fruits.filter( fruit => fruit.length > 5)
console.log(result)