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
    currentPage: 'myblogs',
  });
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
  renderMyBlogsPage,
};
