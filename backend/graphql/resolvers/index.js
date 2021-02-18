const foodResolvers = require('./food');
const categoryResolvers = require('./categories')
const usersResolvers = require('./users');
const postsResolvers = require('./posts');
const commentsResolvers = require('./comments');

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length
  },
  Query: {
    ...foodResolvers.Query,
    ...categoryResolvers.Query,
    ...postsResolvers.Query,
    ...commentsResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation
  },
  Subscription: {
    ...postsResolvers.Subscription
  }
}
