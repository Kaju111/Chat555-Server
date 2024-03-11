import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";

//Create a new user and save it to the database and save in cookie
const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;
  console.log(req.body);

  const avatar = {
    public_id: "akamak",
    url: "kjalkm",
  };

  const user = await User.create({
    name,
    bio,
    username,
    password,
    avatar,
  });

  sendToken(res, user, 201, "User created");
};

const login = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");

  if (!user) return next(new Error("Invalid Username"));

  const isMatch = await compare(password, user.password);

  if (!isMatch) return next(new Error("Invalid Password"));

  sendToken(res, user, 200, `Welcome Back, ${user.name}`);
};

const getMyProfile = (req, res) => {};

export { login, newUser, getMyProfile };
