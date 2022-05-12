import fs from 'fs';
import path from 'path';
import constants from '../utils/constants.js';
import getData from "../utils/request.js"

export default class User {
  /**
  Constructs the Replit username
  @param username Enter the Replit username
  */
  constructor(username) {
    this.username = username;
  }
  
  /**
  Get all data on a Replit user
  @param shouldSimplify Simplify the data returned from replit
  */
  async userFull(shouldSimplify) {
    const username = this.username;

    let data = await getData(constants.queries.userFull, { 
      "username": username,
    });
    if (data.errors) {
      throw new Error(`The Replit GraphQL Server returned an error: ${data.errors}`);
    }
    if (!data.data.userByUsername) {
      throw new Error(`The Replit username '${username}' does not exist`);
    } else {
      if (shouldSimplify) {
        data = data.data.userByUsername;
        data.url = "https://replit.com" + data.url;
      }
  
      return data;
    }
  }

  /**
  Get compressed data on a Replit user
  @param shouldSimplify Simplify the data returned from replit
  */
  async userCompressed(shouldSimplify) {
    const username = this.username;

    let data = await getData(constants.queries.user, { 
      "username": username,
    });
    if (data.errors) {
      throw new Error(`The Replit GraphQL Server returned an error: ${data.errors}`);
    }
    if (!data.data.userByUsername) {
      throw new Error(`The Replit username '${username}' does not exist`);
    } else {
      if (shouldSimplify) {
        data = data.data.userByUsername;
        data.url = "https://replit.com" + data.url;
      }
      return data;
    }
  }

  /**
  Get post data on a Replit user
  @param shouldSimplify Simplify the data returned from replit
  */
  async userPosts(shouldSimplify, count=10, order="new") {
    const username = this.username;

    let data = await getData(constants.queries.userPosts, { 
      "username": username,
      "count": count,
      "order": order,
      "after": ""
    });
    if (data.errors) {
      throw new Error(`The Replit GraphQL Server returned an error: ${data.errors}`);
    }
    if (!data.data.userByUsername) {
      throw new Error(`The Replit username '${username}' does not exist`);
    } else {
      if (shouldSimplify) {
        data = data.data.userByUsername;
        data.url = "https://replit.com" + data.url;
      }
      return data;
    }
  }

  /**
  Get comment data on a Replit user
  @param shouldSimplify Simplify the data returned from replit
  */
  async userComments(shouldSimplify, count=10, order="new") {
    const username = this.username;

    let data = await getData(constants.queries.userComments, { 
      "username": username,
      "count": count,
      "order": order,
      "after": ""
    });
    if (data.errors) {
      throw new Error(`The Replit GraphQL Server returned an error: ${data.errors}`);
    }
    if (!data.data.userByUsername) {
      throw new Error(`The Replit username '${username}' does not exist`);
    } else {
      if (shouldSimplify) {
        data = data.data.userByUsername;
        data.url = "https://replit.com" + data.url;
      }
      return data;
    }
  }
}