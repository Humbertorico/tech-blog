const User = require('./User');
const post = require('./Post');
const Comment = require('./comment');


User.hasMany(post, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

post.belongsTo(User, {
  foreignKey: 'user_id',
});

post.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(post, {
  foreignKey: 'user_id',
});

module.exports = { User, post, Comment };
