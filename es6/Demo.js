var x = 10; // Không nên xài
let y = 11;
const z = 'COMP1031';

const exampleData = {
    first: 'Alan',
    last: 'Vezina',
    hobbies: ['Skateboarding', 'Painting', 'Cycling'],
};
// Old way, without destructuring.
var firsto = exampleData.first;
var lasto = exampleData.last;
var favHobby = exampleData.hobbies[0];
var secondFavHobby = exampleData.hobbies[1];
console.log(firsto, lasto, favHobby, secondFavHobby)

//ES6 destructing
const { first, last, hobbies } = exampleData;
console.log(first, last, hobbies);
const [item1, item2, item3] = hobbies;
console.log(item1, item2, item3);


const newExamData = { ...exampleData, age: 10, first: 'Tèo' };
console.log(newExamData);


//Arrow function
function getName(obj) {
    return `${obj.name} : ${obj.age}`;
}
const getFullName = (obj) => {
    return `${obj.name} : ${obj.age}`;
};
const studentA = { name: 'Loan', age: '19' };
console.log(getName(studentA));
console.log(getFullName(studentA));