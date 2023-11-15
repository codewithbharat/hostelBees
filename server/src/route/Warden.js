const express = require('express');
const router = express.Router();

const { createWarden } = require("../controller/warden")

router.route('/warden').post(createWarden);

module.exports = router;