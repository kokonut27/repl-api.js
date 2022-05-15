[![Documentation Status](https://readthedocs.org/projects/repl-api/badge/?version=latest)](https://repl-api.readthedocs.io/en/latest/?badge=latest)

# repl-api.js
> A NodeJS Replit API package wrapped around GraphQL, returning JSON data for easy use.

## Contents:
* [About](https://github.com/kokonut27/repl-api.js#about)
* [Quickstart](https://github.com/kokonut27/repl-api.js#quickstart)
  * [Pre-installation](https://github.com/kokonut27/repl-api.js#pre-installation)
  * [Installation](https://github.com/kokonut27/repl-api.js#installation)
  * [Examples](https://github.com/kokonut27/repl-api.js#examples)
* [Usage](https://github.com/kokonut27/repl-api.js#usage)
* [Contributing](https://github.com/kokonut27/repl-api.js#contributing)
* [License](https://github.com/kokonut27/repl-api.js#license)
* [Changelog](https://github.com/kokonut27/repl-api.js#changelog)

## About
The Replit API has always been changing and hard to keep up with. Due to this, many API's such as [RayhanADev's](https://github.com/ReplAPI-it/ReplAPI.it-NodeJS) have been depreciated. However, our goal is to keep up with the API, and maintain `repl-api.js`. Replit's API allows lots of data to be accessed, and this is the objective for `repl-api.js` - to return data while keeping up with the latest updates of Replit. Queries available are:

* User queries: General user data, user posts, user comments, etc.
* Repl queries: General repl data, repl comments, etc.
* Talk queries (otherwise known as Community): Top posts, new posts, etc.
* And even more!

`repl-api.js` was developed in NodeJS, with only ESM imports available. It was also built using `classes`, making data easy to retrieve.

## Quickstart
### Pre-installation
In order to use `repl-api.js`, npm must be installed before using it:

```shell
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
For more examples, go to [the docs](https://repl-api.readthedocs.io/en/latest/pages/examples.html).

## Usage
Now that we have everything ready, it's time to actually use the package! For example, for full user data, we can use the following code:

```js
import Replapi from 'repl-api';

const replapi = Replapi();
const user = replapi.User("JBloves27");

let data = await user.userFull(true);

console.log(data);
```

The following code *should* output something like this:
```
{
  bio: 'full-stack nodejs dev | developing a package: https://github.com/kokonut27/repl-api.js/',
  displayName: 'koko/emerald',
  firstName: 'koko/emerald',
  fullName: 'koko/emerald',
  id: 3282411,
  image: 'https://storage.googleapis.com/replit/images/1651630189148_ec097c1c5fabeddb8b257d786e732cdb.jpeg',
  isHacker: false,
  isLoggedIn: false,
  isSubscribed: false,
  isVerified: true,
  karma: 2186,
  lastName: null,
  timeCreated: '2020-05-01T16:19:41.685Z',
  url: 'https://replit.com/@JBloves27',
  username: 'JBloves27',
  roles: [
    {
      id: '3282411:self_learner',
      name: 'self learner',
      key: 'SELF_LEARNER',
      tagline: null
    },
    {
      id: '3282411:explorer',
      name: 'explorer',
      key: 'EXPLORER',
      tagline: 'Helps test Replit beta features'
    }
  ],
  languages: [
    {
      id: 'python3',
      displayName: 'Python',
      key: 'python3',
      category: 'Practical',
      tagline: 'A dynamic language emphasizing readability.',
      icon: 'https://replit.com/public/images/languages/python.svg',
      isNew: false
    },
    {
      id: 'bash',
      displayName: 'Bash',
      key: 'bash',
      category: 'Practical',
      tagline: 'The classic Unix shell',
      icon: 'https://icons.util.repl.co/bash.svg',
      isNew: false
    },
    {
      id: 'html',
      displayName: 'HTML, CSS, JS',
      key: 'html',
      category: 'Web',
      tagline: 'The languages that make up the web.',
      ic: '/public/images/languages/web_project.svg',
          isNew: false
    },
    {
      id: 'nodejs',
      displayName: 'Node.js',
      key: 'nodejs',
      category: 'Practical',
      tagline: 'Evented I/O for V8 JavaScript.',
      icon: 'https://replit.com/public/images/languages/nodejs.svg',
      isNew: false
    },
    {
      id: 'nix',
      displayName: 'Nix (beta)',
      key: 'nix',
      category: 'Practical',
      tagline: 'A base repl for building anything you want in any language.',
      icon: 'https://icons.util.repl.co/bash.svg',
      isNew: false
    },
    {
      id: 'cpp',
      displayName: 'C++',
      key: 'cpp',
      category: 'Practical',
      tagline: 'A general purpose system programming language.',
      icon: 'https://replit.com/public/images/languages/cpp.svg',
      isNew: false
    },
    {
      id: 'swift',
      displayName: 'Swift',
      key: 'swift',
      category: 'Practical',
      tagline: 'A modern general-purpose programming language from Apple.',
      icon: 'https://replit.com/public/images/languages/swift.svg',
      isNew: false
    },
    {
      id: 'c',
      displayName: 'C',
      key: 'c',
      category: 'Practical',
      tagline: 'Low-level and cross-platform imperative language.',
      icon: 'https://replit.com/public/images/languages/c.svg',
      isNew: false
    },
    {
      id: 'scheme',
      displayName: 'Scheme',
      key: 'scheme',
      category: 'Practical',
      tagline: 'An elegant dynamic dialect of Lisp.',
      icon: '/public/images/languages/scheme.svg',
      isNew: false
    },
    {
      id: 'java10',
      displayName: 'Java',
      key: 'java10',
      category: 'Practical',
      tagline: 'A concurrent, class-based, statically typed object-oriented language.',
      icon: 'https://replit.com/public/images/languages/java.svg',
      isNew: false
    }
  ]
}
```

Find more API functions [here](https://repl-api.readthedocs.io/en/latest/pages/api.html).

## Contributing
Either leave a Pull Request, an Issue, or contact me at [here](https://kokonut.vercel.app/).

## License
[MIT](https://github.com/kokonut27/repl-api.js/blob/main/LICENSE)

## Changelog
> View more of the specifics at [repl-api.js/releases](https://github.com/kokonut27/repl-api.js/releases).

### 0.0.0
Initial Commit: currently holds basic User constructor functions and is expected to have many bugs.

* Partially finished `User` constructor
* Base setup functions
* Fully working data retriever (thanks to [darkdarcool](https://github.com/darkdarcool))
