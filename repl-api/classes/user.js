import fs from 'fs';
import path from 'path';
import constants from '../utils/constants.js';
import getData from "../utils/request.js"

export default class User {
  constructor(username) {
    this.username = username;
  }

  async userFull() {
    const username = this.username;

    return await getData("query User($username: String!) {\n  userByUsername(username: $username) {\n    fullName\n    bio\n    karma\n  }\n}\n", {
      "username": username,
    })
  }
}