"use strict";
let sample_function;
let greet = (a) => {
    console.log(`hello ${a}`);
};
let add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
let add1 = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
let sum = (a, b) => {
    return a + b;
};
let result = sum(4, 5);
