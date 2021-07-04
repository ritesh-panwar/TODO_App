const express = require('express');
const router = express.Router();

//importing controller from desired path
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

router.post('/add-task', homeController.addtask)

//exporting router
module.exports = router;