import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import constants from '../utils/constants.js';


export default class User {
  constructor(username) {
    this.username = username;
  }

  userFull() {
    const username = this.username;
    
    fs.readFile('.user-replapi.json', 'utf8', (err, data) => {
    if (err) { 
      return console.log(err); 
    }
    let userData = JSON.stringify(JSON.parse(data), null, 2);
    return userData;
  });
  }
}