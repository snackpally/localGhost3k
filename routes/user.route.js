const express = require('express');
const router = express.Router();
const passport = require('passport');

const user_controller = require('../controllers/user.controller');
//create user route
router.post('/register', user_controller.new_user);

// Endpoint to login
//this works right now
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.send(req.user);
  console.log(req.user.first_name);
});

// Endpoint to get current user
router.get('/profile', function(req, res) {
  res.send(req.user);
  console.log(res.user);
});

// Endpoint to logout
router.get('/logout', function(req, res) {
  req.logout();
  res.send(null);
});

//passport-local
let LocalStrategy = require('passport-local').Strategy;
passport.use(
  new LocalStrategy(function(username, password, done) {
    user_controller.getUserByUsername(username, function(err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: 'Unknown User' });
      }
      user_controller.comparePassword(password, user.password, function(err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Invalid password' });
        }
      });
    });
  })
);
//this allows us to acces user by req.user.<key> ie. with test profile req.user.first_name returns Larry
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  user_controller.getUserById(id, function(err, user) {
    done(err, user);
  });
});
module.exports = router;
