"use client";
import { Loader } from "@/app/components/Loader";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { auth, db } from "../../firebase";

const RegisterStudent = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const signup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((studentSignup) => {
        const user = studentSignup.user;
        return setDoc(doc(db, "users", user.uid), {
          studentNumber: studentId,
          name: fullName,
          role: "student",
          id: user.uid,
        });
      })
      .then(() => {
        setLoading(false);
        toast.success("user signed up successfully");

        router.push("/gettingstarted/login");
      })
      .catch((error) => {
        console.error(error);
        toast.error("user couldnt sign up check your internet connection");
        setLoading(false);
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
            value={studentId}
            name="studentId"
            onChange={(e) => {
              setStudentId(e.target.value);
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
            {loading ? (
              <div className="flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              "Register"
            )}
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

export default RegisterStudent;
