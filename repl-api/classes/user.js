import fetch from 'node-fetch';

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
  Get all GraphQL data on a Replit user
  @param shouldSimplify Simplify the data returned from replit
  */
  async userGraphQLFull(shouldSimplify) {
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
  Get compressed GraphQL data on a Replit user
  @param shouldSimplify Simplify the data returned from replit
  */
  async userGraphQLCompressed(shouldSimplify) {
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
  Get post GraphQL data on a Replit user
  @param shouldSimplify Simplify the data returned from replit
  @param count Number of user posts returned
  @param order Returns order of posts
  */
  async userGraphQLPosts(shouldSimplify, count=10, order="new") {
    const username = this.username;

    let data = await getData(constants.queries.userPosts, { 
      "username": username,
      "count": count,
      "order": order,
      "after": ""
    });
    
    if (data.errors) {
      throw new Error(`The Replit GraphQL Server returned an error: ${JSON.stringify(data.errors)}`);
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
  Get comment GraphQL data on a Replit user
  @param shouldSimplify Simplify the data returned from replit
  @param count Number of user comments returned
  @param order Returns order of comments
  */
  async userGraphQLComments(shouldSimplify, count=10, order="new") {
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
      }
      return data;
    }
  }

  /**
  Get all RESTful data on a Replit user
  @param shouldSimplify Simplify the data returned from replit
  */
  async userRestfulFull(shouldSimplify) {
    const username = this.username;
    let headers = constants.headers;

    let data = await fetch(`${constants.Origin}/data/profiles/${username}`, {
      method: "GET",
      headers
    }).then((res) => res.json());

    if (!data) {
      throw new Error(`The Replit username '${username}' does not exist`);
    } else {
      return data;
    }
  }
}