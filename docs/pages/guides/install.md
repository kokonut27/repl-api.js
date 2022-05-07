# Install Repl-api.js
## Pre-installation
Before installing this package, you must have npm installed first:

```shell
npm install npm@latest -g
```

## Installation
First, use npm to install the package:

```shell
npm install repl-api
```

Then, import the package in your designated NodeJS file:

```nodejs
import Replapi from 'repl-api';
```

Finally, startup the package:

```nodejs
const replapi = Replapi();
const user = replapi.User(username);
```

Now you're ready to move on!

.. toctree::
    :maxdepth: 3
    :hidden:

    pages/guides/install
    pages/guides/intro
    pages/guides/quickstart