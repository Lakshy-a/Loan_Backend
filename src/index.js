import { app } from "./app.js";
import { connectToDb } from "./database/dbConnection.js";
import dotenv from "dotenv";

dotenv.config();

connectToDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

// console.log("Hello World");
