'use client'
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
 
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

 
  return (
    <div className="flexBox min-h-[80vh] bg-[#fffefe]">
      <div className="flex  flex-col rounded-lg bg-[#ffffff] p-7 w-[470px] relative ">
        <div className="h-[2px] bg-[#e2e2e2] rounded-[30px] my-12 "></div>
        <form onSubmit={handleClick}>
          <h2 className="mb-5 text-lg text-center font-bold">Welcome Back!!</h2>
          <label htmlFor="" className="">
            Student Id
          </label>
          <input
            className="input"
            placeholder="Enter Student Id"
            type="studentId"
            value={studentId}
            name="studentId"
            onChange={(e) => {
              setStudentId(e.target.value);
            }}
            required
          />
         <div className="relative">
            <label htmlFor="" className="">
              Password
            </label>
            <input
              className="input"
              placeholder="Enter Password..."
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />

            <button
              type="button" // Prevent form submission on click
              className="absolute top-10 left-[370px]"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ?  <IoEyeOutline />:<FaRegEyeSlash /> }
            </button>
          </div>
          <button
            type="submit"
            className="bg-[#e2e2e2] w-full py-3 rounded-[10px] mb-3 font-bold text-[13px]"
          >
            Sign In{" "}
          </button>
          <Link
            href="./forgotPassword"
            className="text-[0.9rem] mb-3 text-left"
          >
            Forgot Password
          </Link>
          <p className="text-center text-[13px]">
            Don't have an account?{" "}
            <Link href="./" className="text-black font-bold">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
