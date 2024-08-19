const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postingRoutes = require('./postingRoutes');
const commentingRoutes = require('./commentingRoutes');
// Middleware with the use method to use the userRoutes, postingRoutes, and commentingRoutes.
router.use('/users', userRoutes);
router.use('/posts', postingRoutes);
router.use('/comments', commentingRoutes);
module.exports = router;