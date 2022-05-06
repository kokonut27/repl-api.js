import https from "https";
import constants from "./constants.js";
import { Readable } from "stream";

const options = {
  hostname: constants.hostname,
  port: 443,
  path: constants.path,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'repl-api.js team',
    'Origin': 'https://replit.com/'
  }
}

function encodeData(query, variables) {
  const data = new TextEncoder().encode(
    JSON.stringify({
      query,
      variables,
    })
  );
  return data;
}

export default function getData(query, variables) {
  return new Promise((resolve, reject) => {
    let body = [];
    const req = https.request(options, res => {
      res.on('data', chunk => {
        body.push(chunk)
      });
      res.on('end', () => {
        try {
          body = JSON.parse(Buffer.concat(body).toString());
        } catch(e) {
          reject(e);
          return;
        }
        resolve(body);
      });
    })
    req.on('error', error => {
      return console.error(error);
    });
    req.write(encodeData(query, variables));
    req.end();  
  });
}