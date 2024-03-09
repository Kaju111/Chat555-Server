import mongoose from "mongoose";

const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "Chat555" })
    .then((data) => console.log(`Connect to DB : ${data.connection.host}`))
    .catch((err) => {
      throw err;
    });
};

export { connectDB };
