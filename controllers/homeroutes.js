const router = require('express').Router();
const { Post, Users, Comment } = require('../models');

// Create a get route for the homepage
router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [Users],
    });
    const postArray = allPosts.map((post) => post.get({ plain: true }));
    res.render('homepage', { postArray, loggedIn: req.session.logged_in });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Create a get route for the dashboard to display the posts by the logged in user.
router.get('/dashboard', async (req, res) => {
  try {
    const userLogged = await Users.findByPk(req.session.user_id, {});
    const allPosts = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [Users]
    }); 
    const postArray = allPosts.map((post) => post.get({ plain: true }));
    res.render('dashboard', { postArray, loggedIn: req.session.logged_in, userLogged });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Create a get route for the signup page.
router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Create a get route for the login page.
router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Create a post route for the login form submission.
router.post('/login', async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.render('login');
      return;
    }
    // Check the password entered in the login form against the hashed password stored in the database.
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.render('login');
      return;
    }
    // Save the user_id and logged_in status to the session.
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.redirect('/dashboard');
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Create a get route for the logout page.
router.post('/logout', async (req, res) => {
  try {
    req.session.destroy(() => {
      res.redirect('/homepage');
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Post route for the signup form submission.
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [Users, { model: Comment, include: [Users] }],
    });
    const post = postData.get({ plain: true });
    res.render('post', {
      ...post,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;