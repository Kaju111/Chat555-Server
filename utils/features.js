import mongoose from "mongoose";

const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "Chattu" })
    .then((data) => console.log(`Connected to DB${data.connection.host}`))
    .catch((err) => {
      throw err;
    });
};

const sendToken = (res, user, code, message) => {
  const token = "ajnasdo";

  return res.status(code).json({
    success: true,
    token,
    message,
    user,
  });
};

export { connectDB, sendToken };
