const router = require('express').Router();

const {
  renderHomePage,

  renderLoginPage,
  renderSignUpPage,
  renderSingleBlogsPage,
  renderCreateBlogsPage,
  renderDashboard,
} = require('../../controllers/views');
const auth = require('../../middlewares/auth');

//public routes

router.get('/', renderHomePage);
router.get('/login', renderLoginPage);
router.get('/signup', renderSignUpPage);

//private routes

router.get('/blog/:id', auth, renderSingleBlogsPage);
router.get('/createBlog', auth, renderCreateBlogsPage);
router.get('/dashboard', auth, renderDashboard);

module.exports = router;
