import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import constants from './utils/constants.js';

fs.readFile('.pretty-replapi.json', 'utf8', (err, data) => {
  if (err) { return console.log(err); }
  console.log(JSON.stringify(JSON.parse(data), null, 2));
});

export default {
  // add the main piece function here
}
