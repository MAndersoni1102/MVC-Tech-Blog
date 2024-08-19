// Import the Models.
const Users = require('./Users');
const Post = require('./Posting');
const Comment = require('./Commenting');

Users.hasMany(Post, {
  foreignKey: 'User_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(Users, {
  foreignKey: 'User_id',
  onDelete: 'CASCADE',
})

Post.hasMany(Comment, {
  foreignKey: 'Post_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Users, {
  foreignKey: 'User_id',
  onDelete: 'CASCADE',
});

module.exports = { Users, Post, Comment };