"use client";
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from 'firebase/auth';

const Password = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const resetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
    .then(() => {
      setMessage('Password reset email sent! Please check your inbox.');
      
    })
    .catch((err) => {
     alert(err)
      setMessage('');
    });
  };

  return (
    <div className="flexBox min-h-[90vh]">
      <div className="flex  flex-col rounded-lg bg-[#ffffff] p-7 w-[470px]  ">
        <form onSubmit={resetPassword}>
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
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />

          <button
            type="submit"
            className="bg-[#e2e2e2] w-full py-3 rounded-[10px] mb-9 text-[13px]"
          >
            Send Password Resest Email
          </button>
          <Link href="./login" className="text-center text-xl font-semibold">
            Back to login
          </Link>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Password;
