// src/main.js
import { version } from '../package.json';

const printVersion = function () {
  console.log("fixme1library version: " + version);
};

export {printVersion as version};

export {default, Library123} from './Library123';
