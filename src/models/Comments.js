const { Model, DataTypes } = require('sequelize');

const connection = require('../config/connection');

const Blog = require('./Blog');
const User = require('./user');

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Blog,
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },

    comment_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    connection,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comments',
  }
);

module.exports = Comments;
