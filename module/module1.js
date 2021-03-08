// Common JS Syntax - make everything inside available to other files
// module.exports = {
//   name: 'Jake',
//   email: 'jakey@gmail.com'
// }

// ES6 Syntax
export const person = {
  name: 'Herb',
  age: 30
}

export function sayHi() {
  return `hi ${person.name}`
}

// Don't have to use curly braces with default keyword
const greeting = "hello world";
export default greeting;