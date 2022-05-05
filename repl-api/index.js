import fs from 'fs';
import path from 'path';
import User from './classes/user.js';

const replapi = new User({
  username: "JBloves27"
});
console.log(replapi.userFull());

export default {
  // add the main piece function here
}
