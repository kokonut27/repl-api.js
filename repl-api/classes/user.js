import fs from 'fs';
import path from 'path';
import constants from '../utils/constants.js';
import getData from "../utils/request.js"

export default class User {
  constructor(username) {
    this.username = username;
  }
  /**
  Get all data on a replit user
  @param shouldSimplify Simplify the data returned from replit
  */
  async userFull(shouldSimplify) {
    const username = this.username;

    let data = await getData(constants.queries.user, { 
      "username": username,
    });
    if (shouldSimplify) {
      data = data.data.userByUsername;
      data.url = "https://replit.com" + data.url;
    }
    return data;
  }
}