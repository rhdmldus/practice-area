// 1.object to JASON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'cat',
    color: 'white',
    size: null,
    birthDate : new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};
// json = JSON.stringify(rabbit)
console.log(JSON.stringify(rabbit, ['name', 'size']))
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'name' ? 'dog' : value;
})
console.log(json)

console.clear()

// JSON to Object
// parseFloat(json)
json = JSON.stringify(rabbit)
console.log(json)
const obj = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(value) : value;
})
console.log(obj)
console.log(rabbit.birthDate.getDate())
console.log(obj.birthDate.getDate())