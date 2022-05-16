# API reference

## User Class

The User class contains the basic function on handling JSON data returned from Replit GraphQL API.

------

### Constructor

```nodejs
/**
* Gets the User class for a Replit user
* 
* @param {String} username The user being queried
*/
new replapi.User(username);
```

### userFull

```nodejs
/**
* Gets all data on a Replit user
* 
* @param {Bool} simplified
*/
await user.userFull(true);
```

### userCompressed

```nodejs
/**
* Gets all data on a Replit user in compressed JSON
* 
* @param {Bool} simplified
*/
await user.userCompressed(true);
```

### userPosts

> **Note**: This function is in Beta, and is likely to return errors. If you would like, please report the bugs [here](https://github.com/kokonut27/repl-api.js/issues)

```nodejs
/**
* Gets posts data on a Replit user
* 
* @param {Bool} simplified
* @param {Int} post count
* @param {Str} post order
*/
await user.userPosts(true, 10, "new");
```

### userComments

> **Note**: This function is in Beta, and is likely to return errors. If you would like, please report the bugs [here](https://github.com/kokonut27/repl-api.js/issues)

```nodejs
/**
* Gets comments data on a Replit user
* 
* @param {Bool} simplified
* @param {Int} post count
* @param {Str} post order
*/
await user.userComments(true, 10, "new");
```

## Repls Class
The Repls class is developed to return JSON data on user repls. This data includes its language, likes, and more.

---- 


## Post Class
The Post class is designed to return post data from the Replit Community, including comments, likes, and more.

----
