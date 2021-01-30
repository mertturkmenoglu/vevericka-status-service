const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');

router.get('/', statusController.root);
router.get('/services', statusController.getServices);
router.get('/service', statusController.getServiceByName);
router.get('/statuses', statusController.getStatuses);

module.exports = router;