let sample_function:Function;

let greet = (a:string):void=>{
   console.log(`hello ${a}`)
};

let add = (a:number,b:number,c?:string):void=>{
  console.log(a + b)
  console.log(c)
};

let add1 = (a:number,b:number,c:number=10):void=>{
  console.log(a + b)
  console.log(c)
}

let sum =(a:number,b:number):number=>{
  return a + b
};

let result =sum(4,5);