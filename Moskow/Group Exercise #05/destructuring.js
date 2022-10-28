//destructuring
let person = {
    firstName: 'John',
    lastName: 'Doe',
    
};

let { firstName,  lastName = '', currentAge: age = 18 } = person;
console.log(age); // 28