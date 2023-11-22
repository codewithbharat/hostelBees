const express = require('express');
const router = express.Router();

const { createInst, updateInst, getAllInst, getInstById, deleteInst } = require("../controller/institute");
const authMiddleware = require("../middleware/authMiddleware");

router.route('/inst/all').get(authMiddleware, getAllInst);
router.route('/inst/:id').get(authMiddleware, getInstById);

router.route('/inst').post(authMiddleware, createInst);
router.route('/inst/:id').put(authMiddleware, updateInst);
router.route('/inst/:id').delete(authMiddleware, deleteInst);


module.exports = router;