# repl-api.js
> A NodeJS Replit API wrapped around GraphQL, returning JSON data for easy use.

## Contents:
* [About](https://github.com/kokonut27/repl-api.js#about)
* [Quickstart](https://github.com/kokonut27/repl-api.js#quickstart)
  * [Pre-installation]()
  * [Installation]()
  * [Examples]()
* [Usage]()
* [Contributing]()
* [License]()
* [Changelog]()

## About
The Replit API has always been changing and hard to keep up with. Due to this, many API's such as [Ray's](https://github.com/ReplAPI-it/ReplAPI.it-NodeJS) have been depreciated. However, our goal is to keep up with the API, and maintain `repl-api.js`. Replit's API allows lots of data to be accessed, and this is the objective for `repl-api.js` - to return data while keeping up with the latest updates of Replit. Queries available are:

* User queries: General user data, user posts, user comments, etc.
* Repl queries: General repl data, repl comments, etc.
* Talk queries (otherwise known as Community): Top posts, new posts, etc.
* And even more!

`repl-api.js` was developed in NodeJS, with only ESM imports available. It was also built using `classes`, making data easy to retrieve.

## Quickstart
### Pre-installation
In order to use `repl-api.js`, npm must be installed before using it:

```
npm install npm@latest -g
```

### Installation
To install the package, use npm to install it:

```
npm install repl-api
```

Then, import it with the following code:

```js
import Replapi from 'repl-api';
```

Finally, startup the package:

```js
const replapi = Replapi();
const user = replapi.User("JBloves27");
```
### Examples
Simple cycles data:
```js
import Replapi from 'repl-api';

const replapi = Replapi();
const user = replapi.User("JBloves27");

let data = await user.userFull(true);

console.log(data.karma);
```

## Usage
Now that we have everything ready, it's time to 