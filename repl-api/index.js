import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import constants from './utils/constants.js';

let user = "JBloves27";

const response = await fetch(constants.graphql, {
	method: 'POST',
	headers: constants.headers,
	body: {
  	query: `
  query User($username: String!) {
    userByUsername(username: $username) {
      fullName
      bio
      karma
    }
  }`,
  	variables: JSON.stringify({
  		username: user,
  	}),
  },
}).then((res) => res.json());

// const data = await response.();

(async () => {
  console.log(await response);
})();

export default {
  // add the main piece function here
}
