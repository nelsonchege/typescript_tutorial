"use strict";
const LoginDetails = (uid, password) => {
    let name = 'Mario';
    let user = { uid: uid, name };
    return user;
};
const greet = (user) => {
    return `hello ${user.name}`;
};
console.log(greet(LoginDetails('232323', 'password')));
