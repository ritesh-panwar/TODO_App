const express = require('express');
const router = express.Router();

//importing controller from desired path
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

//exporting router
module.exports = router;