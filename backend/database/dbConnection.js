import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
      .connect(process.env.MONGO_URI, {
        dbName: "Restaurant",
      })
      .then(() => {
        console.log("Connected to Database successfully");
      })
      .catch((err) => {
        console.log(`Some error occurred while connecting to Database: ${err}`);
      });
};
