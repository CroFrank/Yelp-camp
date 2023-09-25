const express = require('express');
const router = express.Router();
const catchAsync = require('../utilities/catchAsync');
const passport = require('passport');
const { storeReturnTo } = require('../middelware');
const users = require('../controllers/users')

router.route('/')
    .get(users.home)

router.route('/register')
    .get(users.registerForm)
    .post(catchAsync(users.register))

router.route('/login')
    .get(users.loginForm)
    .post(storeReturnTo,
        passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }),
        users.login)

router.get('/logout', users.logout);

module.exports = router;