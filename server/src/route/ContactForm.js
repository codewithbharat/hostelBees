const express = require('express');
const router = express.Router();

const { contactMe } = require("../controller/contactForm")

router.route('/contact').post(contactMe);

module.exports = router;