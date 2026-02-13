import React from "react";
import Logo from "../assets/logo.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";

function Login() {
  let [show, setshow] = useState();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const AdminLogin = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  return (
    <div className="w-screen h-screen bg-linear-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      <div className="w-full h-20 flex items-center justify-start px-7.5 gap-2.5 cursor-pointer">
        <img className="w-7.5" src={Logo} alt="" />
        <h1 className="text-[22px] font-sans">OneCart</h1>
      </div>

      <div className="w-full h-25 flex items-center justify-center flex-col gap-2.5">
        <span className="text-[25px] font-semibold ">Login Page</span>
        <span className="text-[16px] ">
          Welcome to OneCart, Apply to Admin Login
        </span>
      </div>
      <div className="max-w-150 w-[90%] h-100 bg-[#b91c1c25] border border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        <form
          action=""
          onClick={AdminLogin}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-5"
        >
          <div className="w-[90%] h-100 flex flex-col items-center justify-center gap-3.75 relative">
            <input
              type="text"
              className="w-full h-12.5 border-2 boerder-[#96969635] backdrop:blur-sm rounded-sm shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semi"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type={show ? "text" : "password"}
              className="w-full h-12.5 border-2 boerder-[#96969635] backdrop:blur-sm rounded-sm shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semi"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {!show && (
              <IoEyeOutline
                className="w-5 h-5 cursor-pointer absolute right-[5%] bottom-[57%]"
                onClick={() => setshow((prev) => !prev)}
              />
            )}
            {show && (
              <IoEyeSharp
                className="w-5 h-5 cursor-pointer absolute right-[5%] bottom-[57%]"
                onClick={() => setshow((prev) => !prev)}
              />
            )}
            <button className="w-full h-12.5 bg-[#6060f5] rounded-lg flex items-center justify-center mt-5 text-[17px] font-semibold">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
