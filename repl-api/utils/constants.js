const userAttributes = `
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
`;

const replAttributes = `
id
language
isRenamed
isProject
isPrivate
isStarred
isAlwaysOn
isBoosted
title
slug
description
timeCreated
timeUpdated
isOwner
pinnedToProfile
folderId
files
size
url
url(lite: true)
hostedUrl(dotty: true, protocol: 'HTTPS')
terminalUrl
runCount
publicForkCount
imageUrl
hasUnitTesting
`;

const roleAttributes = `
id
name
key
tagline
`;

const langAttributes = `
id
displayName
key
category
tagline
icon
isNew
`;

const postAttributes = `
id
title
body
showHosted
voteCount
commentCount
isPinned
isLocked
timeCreated
timeUpdated
url
isAnnouncement
isAuthor
canEdit
canComment
canVote
canPin
canSetType
canChangeBoard
canLock
hasVoted
canReport
hasReported
isAnswerable
tutorialPages
preview(length: 150, removeMarkdown: true)
`;

const commentAttributes = `
id
body
voteCount
timeCreated
timeUpdated
url
isAuthor
canEdit
canVote
canComment
hasVoted
canReport
hasReported
isAnswer
canSelectAsAnswer
canUnselectAsAnswer
preview(length: 150, removeMarkdown: true)
`;

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
    ${userAttributes}
    roles { ${roleAttributes} }
    languages { ${langAttributes} }
  }
}`,
    user: `
query User($username: String!) {
  userByUsername(username: $username) {
    ${userAttributes}
  }
}`,
    userPosts: `
query UserPosts($username: String!, $after: String!, $count: Int!, $order: String!) {
  userByUsername(username: $username) {
    posts(after: $after, count: $count, order: $order) {
		  items { ${postAttributes} }
	  }
  }
}`,
    userComments: `
query UserComments($username: String!) {
  userByUsername(username: $username) {
    comments(count: $count, after: $after, order: $order) {
		items { ${commentAttributes} }
  }
}`,
    postFull: `
query Post($id: Int!) {
  post(id: $id) {
    ${postAttributes}
    
    user { ${userAttributes} }
    repl { name }
    comments(count: 10) { 
      items { ${commentAttributes} } 
    }
    votes { 
      items { 
        id user {  
          ${userAttributes}
        } 
      } 
    }
    answeredBy { ${userAttributes} }}
        answer {
          ${commentAttributes}
        }
`,
    communityRepls: `
query communityRepls() { ${replAttributes} }
`
  }
}