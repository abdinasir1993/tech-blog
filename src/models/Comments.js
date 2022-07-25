const { Model, DataTypes } = require('sequelize');

const connection = require('../config/connection');
const Product = require('./Product');
const Tag = require('./Tag');

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id',
      },
    },
    User_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comments',
  }
);

module.exports = Comments;
