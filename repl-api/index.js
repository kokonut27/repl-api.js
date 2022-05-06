import fs from 'fs';
import path from 'path';
import User from './classes/user.js';

const replapi = new User("19wintersp");

console.log(await replapi.userFull(true));

export default {
  // export package here later.
}