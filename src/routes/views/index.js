const router = require('express').router();

const {
  renderHomePage,
  renderMyBlogsPage,
  renderLoginPage,
  renderSignUpPage,
  renderSingleBlogsPage,
} = require('../../controllers/views');

//public routes

router.get('/', renderHomePage);
router.get('/login', renderLoginPage);
router.get('/signup', renderSignUpPage);

//private routes

router.get('/myblogs/:id', renderMyBlogsPage);
router.get('/blog/:id', renderSingleBlogsPage);
