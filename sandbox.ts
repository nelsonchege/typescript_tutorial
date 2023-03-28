//you can also explicitly specify data type before adding values

let character: string;
let age: number;
let isBlackBelt: boolean;

//list

let list1: string[] = [];
let list2: number[] = [];
let list3: boolean[] = [];

// union types
let test_variable: string | number;

let list4: (string | number | boolean)[] = [];

//object

let object1: object;

// note: list are classified as objects,so you may specify with brackets

let object2: {};

let object3: {
  name: string;
  age: number;
  isBlackBelt: boolean;
};
