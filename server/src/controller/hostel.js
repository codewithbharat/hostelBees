const { model } = require("mongoose");
const errorHandler = require("../middleware/errorHandler");
const Hostel = require("../model/Hostel");
const Institute = require("../model/Institute");

// Create Hostel

const createHostels = errorHandler(async (req, res) => {

    const { name, address, capacity } = req.body;
    // create new hostel
    const newHostel = new Hostel({ name, address, capacity });
    const savedHostel = await newHostel.save();

    // Find Institute by Id 
    const instId = req.params.instId;

    const inst = await Institute.findById(instId);

    if (!inst) {
        return res.status(404).json({ error: 'Institute not found' });
    }

    //Add the new hostel's ID to the hostels Array in Institute Model
    inst.hostels.push(savedHostel._id);

    // Sace the updated Institute
    await inst.save();

    res.json({
        message: "Hosetl created and added successfully",
        inst
    })
});


const getAllHostelsInInstitute = errorHandler(async (req, res) => {
    const instId = req.params.instId;
    const inst = await Institute.findById(instId).populate('hostels');

    if (!inst) {
        return res.status(404).json({ error: 'Institute not found' });
    }

    // retrive the hostels associated with the institute
    const hostels = inst.hostels;

    res.json({
        message: `List of All Hostels in ${inst.username}`,
        hostels: hostels
    });
})


module.exports = { createHostels, getAllHostelsInInstitute };