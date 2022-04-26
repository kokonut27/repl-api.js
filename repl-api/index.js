// repl-api package in nodejs
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import constants from './utils/constants.js';

let user = "JBloves27";

const info = await fetch(constants.graphql, {
	method: 'POST',
	headers: constants.headers,
	body: JSON.stringify({
  	query: `
      query User($user: String!) {
        userByUsername(username: $user) {
          karma
        }
      }`,
  	variables: JSON.stringify({
  		user,
  	}),
  }),
}).then((res) => res.json());

// const data = await response.();
(async () => {
  console.log(response);
})();

export default {
  // add the main piece function here
}