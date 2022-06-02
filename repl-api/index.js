import User from './classes/user.js';
import Repls from './classes/repls.js';
import Post from './classes/post.js';
import Community from './classes/community.js';

const replapi = new User("JBloves27");

// console.log(await replapi.userCompressed());
let data = await replapi.userRestfulFull();
console.log(data);

export default function Replapi() {
  return {
    User: User,
    Repls: Repls,
    Post: Post,
    Community: Community,
  };
}