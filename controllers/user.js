import { User } from "../models/user.js";

// Create a new user and save it to the database and return a response and save in cookie
const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;

  console.log(req.body);

  const avatar = {
    public_id: "ajnlmas",
    url: "skablks",
  };

  // await User.create({
  //   name: "Chaman",
  //   username: "chaman",
  //   password: "chaman",
  //   avatar,
  // });

  res.status(201).json({ message: "User created successfully" });
};

const login = (req, res) => {
  res.send("Hello World");
};

export { login, newUser };
