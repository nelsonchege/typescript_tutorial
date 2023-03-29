"use strict";
const me = {
    name: 'Nelson',
    age: 34,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`youve spent ${amount}`);
        return amount;
    }
};
const geeting = (person) => {
    console.log(`Hello ${person.name}`);
};
//geeting(me)
