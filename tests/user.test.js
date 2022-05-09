import Replapi from "../repl-api/index.js";

const replapi = Replapi();
test("Does this even work?", async () => {
  const user = new replapi.User("amasad");

  let data = await user.userFull(true);
  expect(data.karma).toBe(3700);
});

const user = new replapi.User("JBloves27");

let data = await user.userFull(true);
console.log(data);