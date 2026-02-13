import jwt from "jsonwebtoken";

export const genToken = async (userId) => {
  try {
    let token = await jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log("token error");
  }
};

export const genToken1 = async (emial) => {
  try {
    let token = await jwt.sign({ emial }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log("token error");
  }
};
