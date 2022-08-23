const moment = require('moment');
const Blog = require('../../models/Blog');
const User = require('../../models/User');
const Comments = require('../../models/Comments');

const renderHomePage = async (req, res) => {
  const blogData = await Blog.findAll({});
  const blog = blogData.map((blog) => {
    return blog.get({ plain: true });
  });

  console.log(blog);

  return res.render('homePage', { currentPage: 'homepage', blog });
};

const renderLoginPage = (req, res) => {
  return res.render('login', { currentPage: 'login' });
};

const renderSignUpPage = (req, res) => {
  return res.render('signup', { currentPage: 'signup' });
};

const renderSingleBlogsPage = async (req, res) => {
  const blogFromDb = await Blog.findByPk(req.params.id, {
    include: [
      {
        model: Comments,
      },
      {
        model: User,
        attributes: ['firstName', 'lastName'],
      },
    ],
  });

  const blog = blogFromDb.get({
    plain: true,
  });
  console.log(blog);
  return res.render('singleBlog', {
    blog,

    isLoggedIn: req.session.isLoggedIn,
    currentPage: 'singleBlog',
  });
};

const renderDashboard = async (req, res) => {
  const blogData = await Blog.findAll({});
  const blog = blogData.map((blog) => {
    return blog.get({ plain: true });
  });

  return res.render('dashboard', { currentPage: 'dashboard', blog });
};

const renderCreateBlogsPage = (req, res) => {
  return res.render('CreateBlog', {
    isLoggedIn: req.session.isLoggedIn,
    currentPage: 'CreateBlog',
  });
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
  renderSingleBlogsPage,
  renderCreateBlogsPage,
  renderDashboard,
};
