import fs from 'fs';
import path from 'path';
import User from './classes/user.js';

const replapi = new User("JBloves27");

console.log(await replapi.userFull());

export default {
  
}