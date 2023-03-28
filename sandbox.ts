// when declaring a list it will infer to the data initiolized with

let characters = ["Mario", "Luigi", "Bowser", "Princes Peach"];

//cannot
// characters.push(10)

//can
characters.push("Yoshi");

// you can also declare a list with mixed data types
let mixed = [10, "hello", true];

//for objects you can define a key/value pair with specific data types
// once an object is created new keys cant be added and data type cant be changed
let object = {
  name: "Mario",
  age: 30,
  isBlackBelt: false,
};
