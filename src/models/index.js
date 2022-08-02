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
  foreignKey: 'user_id',
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
});

Comments.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

Blog.hasMany(Comments, {
  foreignKey: 'blog_id',
});
