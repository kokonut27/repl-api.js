import constants from '../utils/constants.js';
import getData from "../utils/request.js"

export default class Community {
  async featuredRepls(shouldSimplify) {
    let data = await getData(constants.queries.communityRepls);
    if (data.errors) {
      throw new Error(`The Replit GraphQL Server returned an error: ${data.errors}`);
    }
    if (shouldSimplify) {
      data = data.data.post;
    }
  
    return data;
  }
}