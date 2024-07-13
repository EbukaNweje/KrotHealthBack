const express = require('express');

const router = express.Router();

const { receiveEmail, } = require('../controller/contactController')

//endpoint to receive user messages through Emails
router.post('/emails', receiveEmail);


module.exports = router;