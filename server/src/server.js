import dotenv from "dotenv";
import connectDb from "./db/connectDB.js";
import app from "./app.js";
dotenv.config({
  path: "./.env",
});
connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((er) => {
    console.log("Error: ", er);
    process.exit(1);
  });
