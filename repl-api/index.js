import fs from 'fs';
import path from 'path';

import User from './classes/user.js';
import Repls from './classes/repls.js';
import Talk from './classes/talk.js';

const replapi = new User("JBloves27", true);

console.log(await replapi.userCompressed());

export default {
  User: User,
  Repls: Repls,
  Talk: Talk
}