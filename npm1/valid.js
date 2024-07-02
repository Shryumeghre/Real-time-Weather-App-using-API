import chalk from 'chalk';
import validator from 'validator';
const res = validator.isEmail("shryu@gmail.com");
console.log(res? chalk.green.inverse(res):chalk.red.inverse(res));