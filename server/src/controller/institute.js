const errorHandler = require("../middleware/errorHandler");
const Inst = require("../model/Institute");


// Create a Institutes
const createInst = errorHandler(async (req, res) => {

    // Check if an institute with the given email already exists
    const existingInst = await Inst.findOne({ email: req.body.email });
    if (existingInst) {
        return res.json({ message: 'Institute with this email already exists' });
    }

    // If the institute doesn't exist, create a new one
    const inst = new Inst(req.body);
    const newInst = await inst.save();
    res.status(201).json({
        message: "Institute Registerd Successfully!!!",
        info: newInst
    });
});

// Get all insitutes
const getAllInst = errorHandler(async (req, res) => {
    const inst = await Inst.find();
    res.status(200).json(inst)
});

// Get a institutes by ID
const getInstById = errorHandler(async (req, res) => {
    const inst = await Inst.findById(req.params.id);
    if (!inst) {
        return res.status(404).json({ error: 'Institute not found' });
    }

    res.status(200).json(inst);
});

// Update a institutes by ID

const updateInst = errorHandler(async (req, res) => {
    const inst = await Inst.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!inst) {
        return res.status(404).json({ error: 'Institute not found' });
    }

    res.status(200).json(inst);
});

// Delete a insittutes by ID

const deleteInst = errorHandler(async (req, res) => {
    const inst = await Inst.findById(req.params.id);

    if (!inst) {
        return res.status(404).json({ error: 'Institute not found' });
    }

    await inst.remove();

    return res.status(200).json({
        message: 'Deleted Sucessfully'
    })

})


module.exports = { createInst, updateInst, getAllInst, getInstById, deleteInst }