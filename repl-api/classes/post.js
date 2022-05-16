import fs from 'fs';
import path from 'path';
import constants from '../utils/constants.js';
import getData from "../utils/request.js"

export default class Post {
  constructor(id) {
    this.id = id;
  }

  async postFull(shouldSimplify) {
    const id = this.id;

    if (typeof id !== 'number') {
      throw new Error("'id' attribute is not a valid id or integer");
    }

    let data = await getData(constants.queries.postFull, { 
      "id": id,
    });
    if (data.errors) {
      throw new Error(`The Replit GraphQL Server returned an error: ${data.errors}`);
    }
    if (!data.data.userByUsername) {
      throw new Error(`The Replit post '${id}' does not exist`);
    } else {
      if (shouldSimplify) {
        data = data.data.post;
      }
  
      return data;
    }
  }

  async postCompressed(shouldSimplify) {
    const id = this.id;
  }
}