import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}${process.env.DB_NAME}`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export { connectToDb };
