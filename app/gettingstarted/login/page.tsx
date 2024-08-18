"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { Loader } from "@/app/components/Loader";
import toast from "react-hot-toast";

interface User {
  studentNumber: number;
  name: string;
  role: "student" | "counsellor";
}

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUserRole = async (userId: string) => {
    const userDocRef = doc(db, "users", userId);

    const snapshot = await getDoc(userDocRef);
    if (!snapshot.exists) {
      throw new Error("User document not found!");
    }
    const data = snapshot.data() as User;
    return data.role;
  };

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userId = user.uid;
      const role = await fetchUserRole(userId);
      if (role === "student") {
        router.push("/dashboard");
      } else if (role === "counsellor") {
        router.push("/counsellorDashboard");
      }
      toast.success("Login successful");
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flexBox min-h-[80vh] bg-[#fffefe]">
      <div className="flex  flex-col rounded-lg bg-[#ffffff] p-7 w-[470px] relative ">
        <div className="h-[2px] bg-[#e2e2e2] rounded-[30px] my-12 "></div>
        <form onSubmit={signIn}>
          <h2 className="mb-5 text-lg text-center font-bold">Welcome Back!!</h2>
          <label htmlFor="" className="">
            Email
          </label>
          <input
            className="input"
            placeholder="Enter email..."
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
              className="absolute top-11 left-[365px]"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? <IoEyeOutline /> : <FaRegEyeSlash />}
            </button>
          </div>
          <button
            type="submit"
            className={`bg-[#e2e2e2] w-full py-3 rounded-[10px] mb-3 font-bold text-[13px] `}
          >
            {loading ? (
              <div className=" flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              "Sign In"
            )}
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
