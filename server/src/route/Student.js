const express = require('express');
const router = express.Router();

const { createStudent } = require("../controller/student")

router.route('/student').post(createStudent);

module.exports = router;