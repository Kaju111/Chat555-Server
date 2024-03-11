import { TryCatch } from "./error.js";

const isAuthenticated = TryCatch(async (req, res, next) => {
  console.log("cookie:", req.cookies);
  next();
});

export { isAuthenticated };
