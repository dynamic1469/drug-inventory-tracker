import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}`
    );
    console.log(`DATABASE connected !! DB host :${connection.connection.host}`);
  } catch (er) {
    console.log("Error: ", er);
    process.exit(1);
  }
};

export default connectDb;
