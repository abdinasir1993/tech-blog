const router = require('express').Router();

const {
  renderHomePage,

  renderLoginPage,
  renderSignUpPage,
  renderSingleBlogsPage,
  renderCreateBlogsPage,

} = require('../../controllers/views');
const auth = require('../../middlewares/auth');

//public routes

router.get('/', renderHomePage);
router.get('/login', renderLoginPage);
router.get('/signup', renderSignUpPage);

//private routes

router.get('/blog/:id', auth, renderSingleBlogsPage);
router.get('/createBlog', auth, renderCreateBlogsPage);


module.exports = router;
