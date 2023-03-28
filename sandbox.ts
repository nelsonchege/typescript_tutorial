// variables are declared same as javascript
//but once variables type is set it cannnot be changed

// you dont have to specify the data type when declaring variables because typescript will infer it
let character = "Mario";
let age = 30;
let isBlackBelt = false;

//cannot
// character = 30

// can
character = "Luigi";

//cannot
// age = 'Mario'

// can
age = 20;

//cannot
// isBlackBelt = 'yes'

// can
isBlackBelt = true;

const cicl = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(cicl(7.5));
