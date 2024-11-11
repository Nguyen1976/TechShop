// routes/visit.js
const express = require('express');
const router = express.Router();
const VisitController = require('../controllers/VisitController');

router.post('/track', VisitController.saveVisit);
router.get('/stats', VisitController.getStats);

module.exports = router