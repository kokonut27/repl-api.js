# User

The User class contains the basic function on handling JSON data returned from Replit Graphql API.

------

## Constructor

```nodejs
/**
* Gets the user class for a user
* 
* @param {String} username The user being queried
*/
new replapi.User(username);
```

## userFull

```nodejs
/**
* Gets all data on a replit user
* 
* @param {Bool} simplified
*/
await user.userFull(true);
```

## userCompressed

```nodejs

```