const router = require('express').Router();
const apiRoutes = require('./api');
const homeroutes = require('./homeroutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');
router.use('/', homeroutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
module.exports = router;