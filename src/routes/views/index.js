const router = require('express').router();

const {
  renderHomePage,
  renderMyBlogsPage,
  renderLoginPage,
  renderSignUpPage,
} = require('../../controllers/views');

//public routes

router.get('/', renderHomePage);
router.get('/login', renderLoginPage);
router.get('/signup', renderSignUpPage);

//private routes

router.get('/myblogs', renderMyBlogsPage);
