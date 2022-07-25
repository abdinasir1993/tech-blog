const Blog = require('./Blog');
const User = require('./User');
const Comments = require('./Comments');

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Blog, {
  foreignKey: 'user_id',
});

Comments.belongsTo(User, {
  foreignKey: 'User',
});

User.hasMany(Comments, {
  foreignKey: 'Comments',
});

Comment.belongsTo(Blog, {
  foreignKey: 'Blog',
});

Blog.hasMany(Comments, {
  foreignKey: 'Comments',
});
