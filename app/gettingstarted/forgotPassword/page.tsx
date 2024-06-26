import React from "react";
import Link from "next/link";
const Password = () => {
  return (
    <div className="flexBox min-h-[90vh]">
      <div className="flex  flex-col rounded-lg bg-[#ffffff] p-7 w-[470px]  ">
        <form action="">
          <h3 className="mb-12 text-2xl font-bold text-center">
            Reset Password
          </h3>
          <label htmlFor="" className="">
            Email
          </label>
          <input
            className="input"
            placeholder="Enter your email"
            type="email"
          />

          <button className="bg-[#e2e2e2] w-full py-3 rounded-[10px] mb-9 text-[13px]">
            Send Password Resest Email
          </button>
          <Link href="./login" className="text-center text-xl font-semibold">
            Back to login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Password;
