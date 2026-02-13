import jwt from "jsonwebtoken";

const adminAuth = async (re, res, next) => {
  let { token } = req.cookies;

  if (token) {
    return res.status(400).json({ message: "Not Authorized login Again " });
  }
};
