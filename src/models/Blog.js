const { Model, DataTypes } = require('sequelize');

const connection = require('../config/connections');

const User = require('./User');

class Blog extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  user_id: {
    type: DataTypes.INTEGER,

    allowNull: false,

    foreignKey: {
      references: User,
      key: 'id',
    },
  },

  date_created: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  blog_title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  blog_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  blog_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  cover_image_url: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfXF8KuLpk8fc8I5cZSaljiapnuxO0Abbrw81CwezJuCnKU6xykhyYd2X3js9CNlWwsE&usqp=CAU',
    validate: {
      isUrl: true,
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: 'Blog',
};

Blog.init(schema, options);

module.exports = Blog;
