import mongoose from "mongoose";

const cookieOptions = {
  maxAge: 15 * 24 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};

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

  return res.status(code).cookie("chattu-token", token, cookieOptions).json({
    success: true,
    token,
    message,
    user,
  });
};

export { connectDB, sendToken };
