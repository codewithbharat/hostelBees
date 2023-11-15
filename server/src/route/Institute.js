const express = require('express');
const router = express.Router();

const { createInst, updateInst, getAllInst, getInstById, deleteInst } = require("../controller/institute");

router.route('/inst').post(createInst);
router.route('/inst/all').get(getAllInst);
router.route('/inst/:id').get(getInstById);
router.route('/inst/:id').put(updateInst);
router.route('/inst/:id').delete(deleteInst);


module.exports = router;