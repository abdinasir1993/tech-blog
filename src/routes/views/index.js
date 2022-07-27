const router = require('express').router();

const {
  renderHomePage,
  renderMyBlogsPage,
  renderLoginPage,
  renderSignUpPage,
  renderSingleBlogsPage,
  renderCreateBlogsPage,
} = require('../../controllers/views');

//public routes

router.get('/', renderHomePage);
router.get('/login', renderLoginPage);
router.get('/signup', renderSignUpPage);

//private routes

router.get('/myBlog/:id', renderMyBlogsPage);
router.get('/blog/:id', renderSingleBlogsPage);
router.get('/blog/:id', renderCreateBlogsPage);
