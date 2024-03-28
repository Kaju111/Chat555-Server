import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";
import { errorMiddlewares } from "./middlewares/error.js";
import cookieParser from "cookie-parser";

dotenv.config({
  path: "./.env",
});
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

connectDB(mongoURI);

const app = express();

// Using Middlewares Here
app.use(express.json());
app.use(cookieParser());

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(errorMiddlewares);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
