const express = require('express');
const router = express.Router();
const accountControllers = require(`../controllers/accountController`);

// Example GET endpoint
router.get('/', accountControllers.getAccount);
router.get('/:id', accountControllers.getAccount);

module.exports = router;
