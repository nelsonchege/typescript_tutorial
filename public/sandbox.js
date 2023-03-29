"use strict";
//example 1
let greet;
greet = (name) => {
    console.log(name);
};
//example 2
let cal;
cal = (first_number, second_number, operation) => {
    if (operation == "add") {
        return first_number + second_number;
    }
    else {
        return first_number - second_number;
    }
};
let userAge;
userAge = (user) => {
    console.log(`${user.name} is ${user.age} years old`);
};
userAge({ name: 'Nelson', age: 30 });
