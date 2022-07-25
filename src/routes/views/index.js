const router = require('express').router();

const {
  renderHomePage,
  renderMyBlogsPage,
  renderLoginPage,
  renderSignUpPage,
} = require('../../controllers/views');

//public routes

router.get('/', renderHomePage);
router.get('/login', renderHomePage);
router.get('/signup', renderHomePage);

//private routes

router.get('/myBlogs', renderMyBlogsPage);
