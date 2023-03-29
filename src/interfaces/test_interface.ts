interface isPerson {
    name: string;
    age: number;
    speak: (a: string) => void;
    spend: (a:number)=>void;
  }
  
  const me: isPerson = {
    name: 'Nelson',
    age: 34,
    speak(text:string):void{
      console.log(text)
    },
    spend(amount:number):number{
      console.log(`youve spent ${amount}`)
      return amount;
    }
  }
  
  const geeting =(person: isPerson):void=>{
      console.log(`Hello ${person.name}`)
  }
  
//geeting(me)