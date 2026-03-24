import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    // await mongoose.connect(
    //   "mongodb+srv://vipinkumar:vipin8937@cluster0.0nfrtwq.mongodb.net/OneCart",
    // );
    console.log("DB connected");
  } catch (error) {
    console.log("DB error", error);
  }
};

export default connectDb;
