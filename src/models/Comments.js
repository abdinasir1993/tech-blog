const { Model, DataTypes } = require('sequelize');

const connection = require('../config/connection');

const Blog = require('./Blog');
const User = require('./User');

class Comments extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  blog_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Blog',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id',
    },
  },

  comment_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: 'Comments',
};
Comments.init(schema, options);

module.exports = Comments;
