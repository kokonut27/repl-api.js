// Add future queries and mutations here

export default {
  hostname: "replit.com",
  path: "/graphql",
  headers: {
    "Content-Type": "application/json",
  	Accept: "application/json",
  	Connection: "keep-alive",
  	"X-Requested-With": "JBloves27",
  	Referrer: "https://replit.com/",
  	Origin: "https://replit.com/",
    "User-Agent": "Mozilla/5.0"
  },
  queries: {
    userFull: `
query User($username: String!) {
  userByUsername(username: $username) {
    bio
    displayName
    firstName
    fullName
    id
    image
    isHacker
    isLoggedIn
    isSubscribed
    isVerified
    karma
    lastName
    timeCreated
    url
    username
    roles {
      id
      name
      key
      tagline
    }
    languages {
      id
      displayName
      key
      category
      tagline
      icon
      isNew
    }
  }
}`,
    user: `
query User($username: String!) {
  userByUsername(username: $username) {
    bio
    displayName
    firstName
    fullName
    id
    image
    isHacker
    isLoggedIn
    isSubscribed
    isVerified
    karma
    lastName
    timeCreated
    url
    username
  }
}`,
  }
}