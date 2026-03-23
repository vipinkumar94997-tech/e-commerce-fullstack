// import User from "../model/userModel.js";
// import { adminLogin } from "./authController.js";

// export const getCurrentUser = async (req, res) => {
//   try {
//     let user = await User.findById(req.userId).select("-password");
//     if (!user) {
//       return res.status(404).json({ message: "user not found" });
//     }
//     return res.status(200).json(user);
//   } catch (error) {
//     console.log("errro");
//     return res.status(500).json({ message: `getCurrentUser error ${error}` });
//   }

//   export const getAdmin = async (req, res) => {
//     let adminEmail = req.adminEmail;
//     if (!adminEmail) {
//       return res.status(404).json({ message: "Admin is not found" });
//     }

//     return res.status(201).json({
//       email: adminEmail,
//       role: "admin",
//     });
//   }catch(error) {
//       console.log(error)
//       return res.status(5000).json({message:`getAdmin error ${error}`})
//   }
// };

import User from "../model/userModel.js";
import { getadmin } from "../controller/authController.js";

// ✅ getCurrentUser
export const getCurrentUser = async (req, res) => {
  try {
    let user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `getCurrentUser error ${error}` });
  }
};

// ✅ getAdmin (ALAG function)
export const getAdmin = async (req, res) => {
  try {
    let adminEmail = req.adminEmail;

    if (!adminEmail) {
      return res.status(404).json({ message: "Admin is not found" });
    }

    return res.status(200).json({
      email: adminEmail,
      role: "admin",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `getAdmin error ${error}` });
  }
};
