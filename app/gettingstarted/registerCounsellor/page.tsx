"use client";
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const RegisterCounsellor = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [counsellorId, setCounsellorId] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const signup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      // .then((counsellorSignup) => {
      //   const user = counsellorSignup.user;
      //   alert("counsellor signed up successfully");
      //   console.log(user);
      // })
      // .catch((error) => {
      //   console.log(error);
      //   alert(error.message);
      // });
      .then((counsellorSignup) => {
        const user = counsellorSignup.user;
        console.log(user);
        return addDoc(collection(db, "users"), {
          studentNumber: counsellorId,
          name: fullName,
          role: "counsellor",
        });
      })
      .then(() => {
        console.log("Document written!");
        alert("Counsellor signed up successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };

  return (
    <div className="flexBox min-h-[90vh] bg-[#fffefe]">
      <div className="flex  flex-col rounded-lg bg-[#ffffff] p-7 w-[470px] relative ">
        <form onSubmit={signup}>
          <label htmlFor="" className="">
            Full name
          </label>
          <input
            className="input"
            placeholder="Enter your full name..."
            type="text"
            value={fullName}
            name="fullname"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            required
          />{" "}
          <label htmlFor="" className="">
            Student Id
          </label>
          <input
            className="input"
            placeholder="Enter Student Id..."
            type="number"
            value={counsellorId}
            name="studentId"
            onChange={(e) => {
              setCounsellorId(e.target.value);
            }}
            required
          />
          <label htmlFor="" className="">
            Email Address
          </label>
          <input
            className="input"
            placeholder="Enter email address..."
            type="email"
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
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
              {isPasswordVisible ? <IoEyeOutline /> : <FaRegEyeSlash />}
            </button>
          </div>
          <button
            type="submit"
            className="bg-[#e2e2e2] w-full py-3 rounded-[10px] mb-3 font-bold text-[13px]"
          >
            Register{" "}
          </button>
          <p className="text-center text-[13px]">
            Already have an account?{" "}
            <Link href="./login" className="text-black font-bold">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterCounsellor;
