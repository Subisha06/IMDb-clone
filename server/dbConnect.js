const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    
    console.log("MONGO_URI:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI, {
    
    });

    console.log("Connected to database successfully");
  } catch (err) {
    console.error("Error while connecting to database:", err);
    process.exit(1);
  }
};

module.exports = dbconnect;
