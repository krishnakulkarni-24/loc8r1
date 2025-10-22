const mongoose = require('mongoose');

// Use MongoDB Atlas for production, local for development
const dbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/loc8r";
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);  
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
 
require("./users")
require("./locations")
