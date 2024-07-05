import Link from "next/link";
import React from "react";


const Login = () => {
  return (
    <div className="flexBox min-h-[80vh] bg-[#fffefe]">
      <div className="flex  flex-col rounded-lg bg-[#ffffff] p-7 w-[470px] relative ">
        <div className="h-[2px] bg-[#e2e2e2] rounded-[30px] my-12 "></div>
        <form action="">
          <h2 className="mb-5 text-lg text-center font-bold">Welcome Back!!</h2>
          <label htmlFor="" className="">
            Student Id
          </label>
          <input
            className="input"
            placeholder="Enter Student Id"
            type="email"
          />
          <label htmlFor="" className="">
            Password
          </label>
          <input className="input" placeholder="Enter Password" type="email" />
          <button type="submit" className="bg-[#e2e2e2] w-full py-3 rounded-[10px] mb-3 font-bold text-[13px]">
            Sign In{" "}
          </button>
          <Link
            href="./forgotPassword"
            className="text-[0.9rem] mb-3 text-left"
          >
            Forgot Password
          </Link>
          <p className="text-center text-[13px]">
            Don&apos;t have an account?{" "}
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
