// Common JS Syntax (Also works with npm modules)
// const m1 = require('../module/module1.js'); // doesn't exist in client side JS w/o nodeJS
// console.log(m1.name);

// ES6 Module
// import { person, sayHi } from '../module/module1.js';
// console.log(person.name, sayHi());

// Import all ES6
// import * as mod from '../module/module1.js';
// console.log(mod.sayHi());
// console.log(mod.person);

// Using export default
import greeting from '../module/module1.js';
// console.log(greeting);