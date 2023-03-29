type string_or_number = string| number
type user_object = { uid:string_or_number, name:string }

const LoginDetails=(uid:string_or_number, password:string) => {
  let name:string='Mario';
  let user={uid:uid,name}
  return user
}

const greet =(user:user_object):string => {
  return `hello ${user.name}`
}
 

console.log(greet(LoginDetails('232323','password')))