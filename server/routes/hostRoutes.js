const express = require('express');
const router = express.Router();
const {getVansByHostId} = require('../controllers/hostController');

router.get('/:hostId', getVansByHostId);

module.exports = router;