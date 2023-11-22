const errorHandler = require("../middleware/errorHandler");
const Warden = require("../model/Warden");


// Create a Warden
const createWarden = errorHandler(async (req, res) => {

    // Check if a warden with the given email already exists
    const existingWarden = await Warden.findOne({ email: req.body.email });
    if (existingWarden) {
        return res.json({ message: 'Warden with this email already exists' });
    }

    // If the warden doesn't exist, create a new one
    const warden = new Warden(req.body);
    const newWarden = await warden.save();
    res.status(201).json({
        message: "Warden Registerd Successfully!!!",
        info: newWarden
    })
})


module.exports = { createWarden }