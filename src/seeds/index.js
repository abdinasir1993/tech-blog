const connection = require('../config/connections');
const seedBlogs = require('./blog-seeds');
const seedComments = require('./comment-seeds');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
  try {
    await connection.sync({ force: true });
    console.log('✅ connected to database');

    await seedUsers();
    await seedBlogs();
    await seedComments();
  } catch (error) {
    console.log(`[ERROR]: Failed to seed database | ${error.message}`);
  }
  process.exit(0);
};

seedAll();
