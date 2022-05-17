import User from './classes/user.js';
import Repls from './classes/repls.js';
import Post from './classes/post.js';
import classes from './utils/classes.js';

const replapi = new User("darkdarcool");

// console.log(await replapi.userCompressed());
let data = await replapi.userComments();
console.log(data);

export default function Replapi() {
  return {
    User: classes.user,
    Repls: classes.repls,
    Post: classes.post
  };
}