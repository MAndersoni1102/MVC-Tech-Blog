// Import the sequelize connection, the User model, and the Post model, and the data from the JSON files.
const sequelize = require('../config/connection');
const { Users, Post } = require('../models');
const userData = require('./userData.json');
const postData = require('./postData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};
seedDatabase();