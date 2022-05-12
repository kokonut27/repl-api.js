# API reference

.. _user-class:

## User Class

The User class contains the basic function on handling JSON data returned from Replit Graphql API.

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

.. _repls-class:

## Repls Class
The Repls class is developed to return JSON data on user repls. This data includes its language, likes, and more.

---- 

.. _posts-class:

## Posts Class
The Posts class is designed to return post data from the Replit Community, including comments, likes, and more.

----
