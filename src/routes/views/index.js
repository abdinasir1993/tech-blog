const router = require('express').Router();

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
router.get('/blog', renderSingleBlogsPage);

//private routes

router.get('/myBlog/:id', renderMyBlogsPage);
router.get('/blog/:id', renderSingleBlogsPage);
router.get('/createBlog', renderCreateBlogsPage);

module.exports = router;
