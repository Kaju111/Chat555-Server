import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";

// Create a new user and save it to the database and return a response and save in cookie
const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;

  const avatar = {
    public_id: "ajnlmas",
    url: "skablks",
  };

  const user = await User.create({
    name: "Chaman",
    username: "chamn",
    password: "chaman",
    avatar,
  });

  res.status(201).json({ message: "User created successfully" });
  // sendToken(res, user, 201, "User created");
};

const login = (req, res) => {
  res.send("Hello World");
};

export { login, newUser };
