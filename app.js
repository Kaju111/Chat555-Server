import express from "express";
// import { connectDB } from "./utils/features.js";
// import dotenv from "dotenv";
// import { errorMiddlewares } from "./middlewares/error.js";
// import cookieParser from "cookie-parser";

import userRoute from "./routes/user.js";
// import chatRoute from "./routes/chat.js";

// dotenv.config({
//   path: "./.env",
// });
// const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

// connectDB(mongoURI);

const app = express();

// Using Middlewares Here
// app.use(express.json());
// app.use(cookieParser());

app.use("/user", userRoute);
// app.use("/chat", chatRoute);

// app.use(errorMiddlewares);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
