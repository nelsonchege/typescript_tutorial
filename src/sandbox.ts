
//example 1
let greet :(a:string)=>void;

greet =(name:string):void => {
  console.log(name)
}
//example 2
let cal :(a:number,b:number,c:string)=>number;

cal = (first_number:number, second_number:number,operation:string):number => {
  if (operation=="add"){
    return first_number + second_number;
  }else{
    return first_number - second_number
  }
}

//example 3
type person = {name:string,age:number}

let userAge: (obj:person)=>void;

userAge =(user:{name:string,age:number}):void => {
  console.log(`${user.name} is ${user.age} years old`);
}

userAge({name:'Nelson',age:30})