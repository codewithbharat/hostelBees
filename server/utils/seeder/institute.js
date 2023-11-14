require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Institute = require('../../src/model/Institute'); // Import your Institute model
const Hostel = require('../../src/model/Hostel'); // Import your Hostel model



const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define a function to seed the database
const seedDatabase = async () => {
    try {
        // Create sample hostels with required address and capacity fields
        const hostel1 = await Hostel.create({ name: 'Hostel 1', address: 'Address 1', capacity: 50 });
        const hostel2 = await Hostel.create({ name: 'Hostel 2', address: 'Address 2', capacity: 60 });


        // Create sample institutes
        const institutes = [];
        for (let i = 0; i < 10; i++) {
            const institute = new Institute({
                name: `Institute ${i}`,
                email: `institute${i}@example.com`,
                password: 'password123', // Set a default password
                university: 'Sample University',
                category: i % 2 === 0 ? 'tech' : 'non-tech',
                address: 'Sample Address',
                web: 'http://example.com',
                hostels: [hostel1, hostel2], // Assign hostels as needed
            });
            const salt = bcrypt.genSaltSync(10);
            institute.password = bcrypt.hashSync(institute.password, salt);
            institutes.push(institute);
        }

        // Insert the sample institutes into the database
        await Institute.insertMany(institutes);

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding the database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();
