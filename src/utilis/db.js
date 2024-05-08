const mongoose = require("mongoose");
const databaseURL = 'mongodb+srv://naeemabargir9:KQSXSBkXW7O65x2V@cluster0.4zzfmn7.mongodb.net/';

async function connectDB() {
    try {
        await mongoose.connect(databaseURL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
}

module.exports = connectDB;
