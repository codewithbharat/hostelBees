const express = require('express');
const router = express.Router();

const { createInst, updateInst, getAllInst, getInstById, deleteInst } = require("../controller/institute");
const { authenticateUser, checkUserType } = require("../middleware/authMiddleware");

router.route('/inst/all').get(authenticateUser, getAllInst);
router.route('/inst/:id').get(authenticateUser, getInstById);

router.route('/inst').post(authenticateUser, checkUserType('admin'), createInst);
router.route('/inst/:id').put(authenticateUser, checkUserType('admin'), updateInst);
router.route('/inst/:id').delete(authenticateUser, checkUserType('admin'), deleteInst);


module.exports = router;