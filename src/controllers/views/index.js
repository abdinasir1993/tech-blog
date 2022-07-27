const moment = require('moment');

const renderHomePage = (req, res) => {
  return res.render('home', {
    isLoggedIn: req.session.isLoggedIn,
    currentPage: 'home',
  });
};

const renderLoginPage = (req, res) => {
  return res.render('login', { currentPage: 'login' });
};

const renderSignUpPage = (req, res) => {
  return res.render('signup', { currentPage: 'signup' });
};

const renderMyBlogsPage = (req, res) => {
  return res.render('myBlogs', {
    isLoggedIn: req.session.isLoggedIn,
    currentPage: 'myBlogs',
  });
};
const renderSingleBlogsPage = (req, res) => {
  return res.render('singleBlogs', {
    isLoggedIn: req.session.isLoggedIn,
    currentPage: 'singleBlogs',
  });
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
  renderMyBlogsPage,
  renderSingleBlogsPage,
  renderCreateBlogsPage,
};
