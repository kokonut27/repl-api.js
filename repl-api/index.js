import fs from 'fs';
import path from 'path';

import User from './classes/user.js';
import Repls from './classes/repls.js';
import Talk from './classes/talk.js';
import classes from './classes.js';

const replapi = new User("JBloves27", true);

// console.log(await replapi.userCompressed());
// console.log(await replapi.userFull());

export default function Replapi() {
  return {
    User: classes.user,
    Repls: classes.repls,
    Talk: classes.talk
  };
}