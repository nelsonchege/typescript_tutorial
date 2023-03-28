// variables are declared same as javascript
//but once variables type is set it cannnot be changed
// you dont have to specify the data type when declaring variables because typescript will infer it
var character = "Mario";
var age = 30;
var isBlackBelt = false;
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
var cicl = function (diameter) {
    return diameter * Math.PI;
};
console.log(cicl(7.5));
