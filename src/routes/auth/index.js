const { router } = require('express');
const { login, signup, logout } = require('../../');

const router = Router();

router.post('login', login);
router.post;
