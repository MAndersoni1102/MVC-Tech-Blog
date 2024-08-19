const router = require('express').Router();
const { Users } = require('../../models');

// Route to get all users and exclude the password column.
router.get('/', async (_, res) => {
  try {
    const userData = await Users.findAll({
      attributes: { exclude: ['password'] },
    });
    res.json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to create a new user and create a session for the user using the session middleware.
router.post('/', async (req, res) => {
  try {
    const userData = await Users.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to login a user and create a session for the user.
router.post('/login', async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to logout a user and destroy the session.
router.post('/logout', async (req, res) => {
  try {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;